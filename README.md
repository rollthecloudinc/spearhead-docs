<img width="1440" alt="Screen Shot 2022-11-25 at 2 51 48 PM" src="https://user-images.githubusercontent.com/73197190/204049889-62202d1c-fe3a-4a72-9722-7dc5c497e304.png">

# Summary

Spearhead Docs is a starter kit to bootstrap sustainable documentation that follows the Green Software Foundation documentation theme. Spearhead Docs also track back and front end SCI. Emissions are provided in the header alongside for readers to contribute offsetting of emissions. New documentation pages can be published and edited directly in the browser without additional page load never leaving the website.

# Features

* Low Energy
* SEO Friendly
* High Availability Low Latency
* In Place Editing
* SCI Tracking
  * Back-end
  * Front-End
* Dev Tools Styling
* Carbon Awareness
* Application Embedding
* Transparency
* Github Native

## Low Energy

Spearhead docs run completely in the browser without any additional page loads unless publishing or editing new pages. Builders can optionally disable JavaScript for deployment adding to sustainability of Spearhead Docs websites.

Pure static with Angular removed Beacon score.

<img width="1440" alt="Screen Shot 2022-11-28 at 7 19 07 PM" src="https://user-images.githubusercontent.com/73197190/204410728-4f091ce9-2e94-497c-87b7-45d0c2d67290.png">

## SEO Friendly

Spearhead Docs pages are pre-rendered on the server as HTML. Initial page loads include the physical HTML right on the page. Subsequent page changes run completely in the browser without additional network requests. The data used to generate pages is compiled directly into the source code to neautralize network traffic during a continuous publishing and/or reading session.

## High Availability Low Latency

Spearhead Docs run on CDNs. The presentation website runs on Azure Static Web Apps with enterprise grade edge enabled. However, the docs can be hosted on any CDN – aws, cloudflare, github, gitlab, etc.

## In Place Editing – [Quell](https://github.com/rollthecloudinc/quell)

Publish and edit pages directly in the browser without additional page loads never leaving the site. 

> Publishing and editing is disabled for production deployments that opt into running the site without JavaScript.

<img width="1440" alt="Screen Shot 2022-11-25 at 3 04 31 PM" src="https://user-images.githubusercontent.com/73197190/204050666-33fb1284-1f3c-4a8f-915b-4ec4748fe9c1.png">

## SCI – Software Carbon Intensity Tracking

Tracks both front and back end emissions. Logs back-end SCI inside AWS Open Search. Once in open search data can be analyzed for opporunities to reduce emissions and purchase offsets. Users can contribute to offset of Spearhead Docs deployments emissions by using the contribute button within the header of every site.

<img width="1440" alt="Screen Shot 2022-11-15 at 7 08 47 AM" src="https://user-images.githubusercontent.com/73197190/204052881-d8e6ab2c-957f-4078-a363-26a612850b0f.png">

## Dev Tools Styling

Spearhead Docs are styled using Tail Wind CSS. Browser dev tools can be used to add Tail Wind CSS classes to customize pages. Classes added within the dev tools are retained and applied to future page loads. 

> This feature is not currently supported when deploying to production without JavaScript.

https://youtu.be/0dP7lS8eUEE

## Carbon Awareness – [HEDGE](https://github.com/rollthecloudinc/hedge)

Spearhead Docs are backed by our award winning clean energy carbon aware data store HEDGE.

![carbonhack_cert](https://user-images.githubusercontent.com/73197190/204116115-a60ea43d-6d50-4741-ab0e-97c58355f96d.png)

## Application Embedding

Outside applications can be natively embedded into pages using web pack 5 module federation. Devs can create micro-frontends that deomonstrate features which can then be hosted inside pages without an iframe. Spearhead Docs is an native orchestration platform for micro-frontends.

<img width="1440" alt="Screen Shot 2022-11-26 at 8 56 49 PM" src="https://user-images.githubusercontent.com/73197190/204115805-99ff3750-3a9a-45f5-ae9b-8ae7ece3af2f.png">

## Transparency

Roll the Coud web site front-end carbon emissions are publicly reported using statsy.

https://statsy.com/share/spearhead-docs.carbonfreed.app/co2?from=1669509927&to=1669514756&type=all-time

<img width="1440" alt="Screen Shot 2022-11-26 at 9 07 25 PM" src="https://user-images.githubusercontent.com/73197190/204116069-c6c3e32e-b7d0-484a-babb-ad2acb5dc02e.png">

## Github Native

Github is used extensively for Roll the Cloud enterprise apps. We store data in object repos. We achieve automation using Github Actions for continuous deployments. All code is open source and available on Github. Spearhead Docs deployments can also be hosted on Github Pages free of costs without sacrificing latency or availability.



