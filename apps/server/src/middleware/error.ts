import { errorResponse } from "../utils/response";
import { AppError } from "../utils/app-error";
import type { ContentfulStatusCode } from "hono/utils/http-status";

export const globalErrorHandler = (err: any, c: any) => {
  console.error("🔥 ERROR:", err);

  if (err instanceof AppError) {
    return errorResponse(
      c,
      err.message,
      null,
      err.statusCode as ContentfulStatusCode,
    );
  }

  if (err.name === "ZodError") {
    return errorResponse(c, "Validation failed", err.errors, 400);
  }

  if (err.code === "P2002") {
    return errorResponse(c, "Duplicate field value", err.meta, 400);
  }

  return errorResponse(c, "Internal Server Error", null, 500);
};
