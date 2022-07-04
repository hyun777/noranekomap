import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const saltRounds = 10;

// 스키마구조 만들기
const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      maxlength: 40,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      maxlength: 100,
      required: true,
    },
    status: {
      type: String,
      default: 'A',
    },
  },
  schemaOptions
);

// 최종적으로 모델(생성자함수) 완성
export const User = mongoose.models.User || mongoose.model('User', userSchema);
