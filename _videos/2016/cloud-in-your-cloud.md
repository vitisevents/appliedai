---
title: Cloud in your Cloud
speaker: Matthew Campbell
video-id: NwWVhRAiW7k
length: "0:28:15"
---
How is the cloud built? We will go into detail how we write microservices that run the cloud at scale. With tens of the thousands of customers, and 10+ datacenters. We will talk about how we write, monitor and deploy the microservices that run the cloud you use. 
<br><br>Digital ocean is one of the largest cloud providers on the planet with 10 different datacenters and tens of the thousands of customers. We will talk about how we use microservices to power our cloud.
First we will talk about how we using GO to build microservices. The trade offs of different rpcs protocols such as GRPC and http/JSON.
Second we will dive into how we manage service discovery with Consul on thousands of nodes. 
Third we will talk about how we monitor health and performance of the cloud. We will go into how you should build metrics into your microservices. How we use structured logging into kibana. 
Last we will talk about different deployment strategies we have used, including some on bare metal for hypervisors. Some at virtual machines. Lastly our more modern pieces that run on Docker and Mesos. We will go through how we tried all this different techniques to find the right one for each service.