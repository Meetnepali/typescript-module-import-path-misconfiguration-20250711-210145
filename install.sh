#!/bin/bash
set -e

if ! command -v docker >/dev/null 2>&1; then
  echo "[ERROR] Docker must be installed to run this project." >&2
  exit 1
fi
if ! command -v docker-compose >/dev/null 2>&1; then
  echo "[ERROR] Docker Compose must be installed." >&2
  exit 1
fi

echo "[INFO] Building Docker images..."
docker-compose build --pull

echo "[INFO] Starting containers..."
docker-compose up -d

echo "[INFO] Install complete. The React app will be running on http://localhost:3000 once ready."
