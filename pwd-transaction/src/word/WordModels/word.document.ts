
import{Document} from 'mongoose';

export interface WordDocument extends Document {
    word: string;
    category: string;
    type: string;
    image: string;
}