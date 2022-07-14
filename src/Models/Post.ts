import mongoose from 'mongoose';

// 스키마구조 만들기
const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      maxlength: 40,
      required: true,
    },
    catName: {
      type: String,
      maxlength: 40,
      required: true,
    },
    gender: {
      type: Number,
      maxLength: 1,
      required: true,
    },
    characteristic: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      data: Buffer,
      required: true,
    },
    image: {
      type: String,
      data: Buffer,
      required: true,
    },
    lat: {
      type: String,
      required: true,
    },
    lng: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: new mongoose.Schema(
          {
            userId: {
              type: String,
            },
            comment: {
              type: String,
            },
            status: {
              type: String,
              default: 'A',
            },
          },
          schemaOptions
        ),
      },
    ],
    status: {
      type: String,
      default: 'A',
    },
  },
  schemaOptions
);

// 최종적으로 모델(생성자함수) 완성
export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
