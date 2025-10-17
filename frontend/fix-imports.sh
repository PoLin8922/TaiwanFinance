#!/bin/bash

# Update all imports from @shared/schema to @/shared/schema
find . -type f -name "*.ts" -o -name "*.tsx" -exec sed -i '' 's/@shared\/schema/@\/shared\/schema/g' {} +