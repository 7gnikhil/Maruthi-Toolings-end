// FIX: Switched to named imports for Request and Response from Express to resolve type errors on `req.body` and `res.status`.
import { Request, Response } from 'express';
import InquiryModel from '../models/inquiry.model';

/**
 * This file contains Express controller handlers.
 * It handles saving contact inquiries to the database.
 */

export const createInquiryHandler = async (req: Request, res: Response) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!email || !message) {
            return res.status(400).json({ message: 'Email and message are required fields.' });
        }
        const newInquiry = new InquiryModel({
            name,
            email,
            subject,
            message,
        });
        await newInquiry.save();
        res.status(201).json({ message: 'Inquiry submitted successfully!', inquiry: newInquiry });
    } catch (error) {
        console.error('Error saving inquiry:', error);
        res.status(500).json({ message: 'Error submitting inquiry' });
    }
};