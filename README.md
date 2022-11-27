<img width="1440" alt="Screen Shot 2022-11-25 at 2 51 48 PM" src="https://user-images.githubusercontent.com/73197190/204049889-62202d1c-fe3a-4a72-9722-7dc5c497e304.png">

# Features

* Low Energy
* High Availability Low Latency
* In Place Editor
* SCI Tracking
  * Back-end
  * Front-End
* Dev Tools Styling
* Carbon Awareness

## Low Energy

Spearhead docs run completely in the browser without any additional page loads unless publishing or editing new pages. Builders can optionally disable JavaScript for deployment adding to sustainability of Spearhead Docs websites.

## High Availability Low Latency

Spearhead Docs run on CDNs. The presentation website runs on Azure Static Web Apps with enterprise grade edge enabled. However, the docs can be hosted on any CDN – aws, cloudflare, github, gitlab, etc.

## In Place Editor – [Quell](https://github.com/rollthecloudinc/quell)

Publish and edit pages directly in the browser without additional page loads never leaving the site. 

> Publishing and editing is disabled for production deployments that opt into running the site without JavaScript.

<img width="1440" alt="Screen Shot 2022-11-25 at 3 04 31 PM" src="https://user-images.githubusercontent.com/73197190/204050666-33fb1284-1f3c-4a8f-915b-4ec4748fe9c1.png">

## SCI – Software Carbon Intensity Tracking

Tracks both front and back end emissions. Logs back-end SCI inside AWS Open Search. Once in open search data can be analyzed for opporunities to reduce emissions and purchase offsets. Users can contribute to offset of Spearhead Docs deployments emissions by using the contribute button within the header of every site.

<img width="1440" alt="Screen Shot 2022-11-15 at 7 08 47 AM" src="https://user-images.githubusercontent.com/73197190/204052881-d8e6ab2c-957f-4078-a363-26a612850b0f.png">

## Dev Tools Styling

Spearhead Docs are styled using Tail Wind CSS. Browser dev tools can be used to add Tail Wind CSS classes to customize pages. Classes added within the dev tools are retained and applied to future page loads. 

> This feature is not currently supported when deploying to production without JavaScript.

## Carbon Awareness – [HEDGE](https://github.com/rollthecloudinc/hedge)

Spearhead Docs are backed by our award winning clean energy carbon aware data store. The cpu processing for page saves occurs on the aws data center available within an energy grid with the lowest carbon intensity.


