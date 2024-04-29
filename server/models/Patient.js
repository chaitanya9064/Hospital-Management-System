const mongoose = require("mongoose");

const billItemSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
});

const testSchema = new mongoose.Schema({
  name: { type: String },
  result: { type: String },
});

const medicineSchema = new mongoose.Schema({
  name: { type: String },
  dosage_mg: { type: Number },
  prepared_by: { type: String },
});

const medicalRecordSchema = new mongoose.Schema({
  appointment_details: {
    clinicNumber: { type: Number, default: 0 },
    date: { type: Date },
    description: { type: String },
  },
  prescription: {
    doctor_comments: { type: String },
    medicines: [medicineSchema],
    given_by: { type: String },
    date: { type: Date },
  },
  test_report: {
    comments: { type: String },
    tests: [testSchema],
    generated_by: { type: String },
  },
  payment_details: {
    total: { type: Number },
    issue_date: { type: Date },
    due_date: { type: Date },
    tax_rate: { type: Number },
    bill_items: [billItemSchema],
    generated_by: { type: String },
  },
});

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, maxlength: 11 },
  designation: { type: String, required: true }, // Add designation field
  medical_records: [medicalRecordSchema],
  register_date: { type: Date, default: Date.now },
});

const Patient = new mongoose.model("patient", patientSchema);
module.exports = Patient;
