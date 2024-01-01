export interface TPropsCustomInput {
  value: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  onBlur?: (value?: any) => void;
  onFocus?: (value?: any) => void;
  onChange: (value: any) => void;
  error?: {
    status: boolean;
    message: string;
  };
  width?: string;
}

export interface TPropsInputWrap {
  value: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  onBlur?: (value?: any) => void;
  onFocus?: (value?: any) => void;
  onChange: (value: any) => void;
  error?: {
    status: boolean;
    message: string;
  };
  title: string;
  width?: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  avatarUrl?: string;
}

export interface AnimeCard {
  id: number;
  title: string;
  description: string;
  image: string;
}
