export interface Animal {
  id?: number;
  postDate: Date;
  description: string;
  allowComments: boolean;
  userId: number;
  url: string;
  comments: number;
  likes: number;
}

export type Animais = Array<Animal>;
