export interface IProjection {
  [key: string]: boolean;
}

export interface ISearchQuery {
  [key: string]: {
    [key: string]: number;
  };
}
