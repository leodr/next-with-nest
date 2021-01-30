import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import express from "express";
import type { NextApiRequest, NextApiResponse } from "next";
import { AppModule } from "../../api/app.module";

const server = express();

const appPromise = NestFactory.create(
  AppModule,
  new ExpressAdapter(server)
).then((app) => {
  app.enableCors();
  app.setGlobalPrefix("/api");
  return app.init();
});

export default async function mainHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await appPromise;

  server(req, res);
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
