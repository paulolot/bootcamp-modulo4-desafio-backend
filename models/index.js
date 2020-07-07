import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import gradeModel from './gradeModel.js';

const db = {};

db.mongoose = mongoose;
db.grades = gradeModel(mongoose);
db.url = process.env.MONGODB;

export { db };
