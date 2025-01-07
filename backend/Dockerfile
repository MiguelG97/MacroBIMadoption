ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine AS base

FROM base AS deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci 

FROM deps AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
ARG POSTGRES_PRISMA_URL
ENV POSTGRES_PRISMA_URL=${POSTGRES_PRISMA_URL}
RUN npx prisma generate
RUN npm run build

FROM base AS final
WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY ./prisma ./prisma

USER root
RUN chown -R node:node /usr/src/app
USER node

# Expose the port that the application listens on.
EXPOSE 3000
RUN npx prisma generate
# Run the application.
CMD ["node", "dist/main"]
