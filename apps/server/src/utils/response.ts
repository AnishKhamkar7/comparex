import type { Context } from "hono";
import type { ApiResponse } from "../types/api-response";
import type { ContentfulStatusCode } from "hono/utils/http-status";

export const successResponse = <T>(
  c: Context,
  message: string,
  data: T,
  status: ContentfulStatusCode = 200,
) => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
    error: null,
  };

  return c.json(response, status);
};

export const errorResponse = (
  c: Context,
  message: string,
  error: unknown = null,
  status: ContentfulStatusCode = 500,
) => {
  const response: ApiResponse<null> = {
    success: false,
    message,
    data: null,
    error,
  };

  return c.json(response, status);
};
