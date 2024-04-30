export type LabStatus = string | number;

export type LabContent = {
  user_id: string;
  status: LabStatus;
  lab_full_name: string;
};

export interface Lab_summary_list {
  name: string;
  status_or_mark: string;
}

export interface Summary {
  user_name_surname: string;
  user_id: string;
  lab_summary_list: Lab_summary_list[];
}

export type StateType<T> = (value: T) => void;

export type PropsType = {
  setGetWork: StateType<string>;
  setName: StateType<string>;
};

export interface DataType {
  key: React.Key;
  student: string;
  lab_1: LabContent;
  lab_2: LabContent;
  lab_3: LabContent;
  lab_4: LabContent;
}
