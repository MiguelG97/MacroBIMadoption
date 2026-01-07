ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine AS base

FROM base AS deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci 
COPY prisma ./prisma
RUN npx prisma generate

FROM deps AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS final
WORKDIR /usr/src/app
ENV POSTGRES_PRISMA_URL=${POSTGRES_PRISMA_URL}
ENV NODE_ENV=production

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY ./prisma ./prisma

USER root
RUN chown -R node:node /usr/src/app
USER node

# Expose the port that the application listens on.
EXPOSE 3000
# Applying migrations at container startup!
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
