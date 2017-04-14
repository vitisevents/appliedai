---
title: "The dark side of microservices"
speaker: Jelmer Snoeck
video-id: KMyQCokzLwA
length: "0:26:42"
---
The term "microservices" has been around for a while now. We've seen a lot of information on why you should adopt this type of architecture, but no one tells you why you shouldn't. This talk won't do that either, but we'll go over some of the issues and traps that microservices bring with it.<br><br>We'll look at what kind of tools you need to get a system like this up and running. What kind of decisions do you have to take to roll out a system like this?<br><br>How do you communicate between services? REST or RPC? XML or JSON? What framework do we use? micro or go-kit? Where do we store our metrics? How do we create new services? How do we develop these newly created services and communicate with existing services?<br><br>These are all decisions a team can get hung up on and spend a lot of time on. This talk aims to help in the decision making and give some insights in our decisions.<br><br>Besides the tools and decisions, we'll also look at the extra complexity this system brings with it. How do you debug multiple services? How do you keep track of all these services?