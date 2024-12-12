import type { NextFunction, Request, Response } from 'express';
import catchAsyncError from '../utils/catchAsyncError';
import FormResponse from '../models/formResponseModel';
import Form from '../models/formModel';
import AppError from '../utils/appError';
import { exportToCSV } from '../utils/exportCsv';

export const getAllResponses = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const form = await Form.findById(req.params.id);
    if (!form) return next(new AppError('No form found with that ID', 404));

    const responses = await FormResponse.find({ form: req.params.id }).exec();

    res.status(200).json({
      status: 'success',
      data: {
        responses,
      },
    });
  },
);

export const createResponse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { response } = req.body;

    if (!response)
      return next(new AppError('Please provide response of the form!', 400));

    const form = await Form.findById(req.params.id);
    if (!form) return next(new AppError('No form found with that ID', 404));
    if (!form.isActive)
      return next(
        new AppError('The form is no longer accepting submissions', 400),
      );

    const newResponse = await FormResponse.create({
      form: req.params.id,
      response,
    });

    res.status(201).json({
      status: 'success',
      data: {
        response: newResponse,
      },
    });
  },
);



export const exportcsv = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const formId=req.params.id;
    
    // Query MongoDB to find form submissions by formId
    const submissions = await FormResponse.find({ form: formId });

    // if (submissions.length === 0) {
    //   return res.status(404).json({ message: "No submissions found" });
    // }

    // Extract response data from each submission and get the headers from the first response object
    const csvData = exportToCSV(
      submissions.map((sub:any) => sub.response),
      Object.keys(submissions[0].response)
    );

    // Set headers for the response to be downloaded as a CSV file
    res.header("Content-Type", "text/csv");
    res.attachment("submissions.csv");
    res.send(csvData);

  } catch (error) {
    res.status(500).json({ message: "Error exporting submissions", error });
  }
};
