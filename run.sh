#!/bin/bash
set -e

./install.sh

echo "[INFO] Waiting for the React app to become available..."
RETRIES=20
until curl -s http://localhost:3000 > /dev/null; do
  ((RETRIES--))
  if [[ $RETRIES -le 0 ]]; then
    echo "[ERROR] The React app failed to start after multiple attempts." >&2
    exit 1
  fi
  sleep 2
done

echo "[SUCCESS] The React app is running at http://localhost:3000."
