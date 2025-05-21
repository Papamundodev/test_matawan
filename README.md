# PHP Test Project

A simple PHP project using Docker for development.

## Requirements

- Docker
- Docker Compose

## Running the Project

1. Start the Docker container:

```bash
docker-compose up
```

2. Visit: http://localhost:8000

## Project Structure

- `public/` - Public directory containing index.php
- `src/` - Source code directory
- `vendor/` - Composer dependencies
- `docker-compose.yml` - Docker configuration

## Development

- The project uses PHP 8.2 with Apache
- Files are mounted from your local directory to the container
- Changes to your files will be reflected immediately
- Apache is configured to serve from the `public` directory

## Stopping the Project

To stop the Docker container:

```bash
docker-compose down
```
