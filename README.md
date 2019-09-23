#Gallery Challenge
Design and Technical decisions.
1. Provided sample data has high resolution images, which causes latency when images are requested. To improve better user experience, system should show loading image or progress bar. 
2. Current design doesn't display properly grid view for mobile and tablet viewports in landscape mode.
3. Display of image large view can be improved for mobile and tablet viewports.
4. Current design has pagination implementation on windows scroll event, it fetches 10 images per request. Also it has caching implementation for each request, if data is not present in cache then only it makes call to server.

  