## Run

*  Build the image: `docker build -t app-image .`
*  Run the container `docker run -ti --rm -v $(pwd):/app -p 3003:3003 --name app app-image`
