export type LayoutProps = {
  children: React.ReactNode;
};

export type componentSize = "sm" | "md" | "lg" | "xl";

export interface apiRequestParams {
  onError?: (err: any, context?: any) => void;
  onSuccess?: (res: any) => void;
}

export type UnknownObjectType = Record<string, any>;

export type apiReturnError = string | UnknownObjectType;

export type tableRequestParams = { page: number; size: number };

export type sortOrderType = "asc" | "desc";

export type paginatedData = {
  content: UnknownObjectType[];
  totalElements: number;
};
