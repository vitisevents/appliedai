---
title: "Real-Time Go"
metatitle: "Real-Time Go"
speaker: Andreas Krennmair
video-id: nRCXS6PUr5c
length: "0:45:38"
---
Garbage-collected languages like Go usually don't have the reputation of being particularly well-suited for real-time applications. As an online advertising company with a focus on the travel industry, we extensively use real-time bidding (RTB) to programmatically buy ad impression through automated auctions. In order to effectively take part in these auctions we have developed our own in-house bidder using Go.<br><br>Building a bidder to accommodate both the specific requirements of our business and the constraints of a soft real-time application while quickly iterating on new features was a big challenge. Over the course of more than two years, we have learned a number of lessons and techniques on designing, instrumenting and tuning Go applications and their underlying data stores for efficiency under real time conditions. We would like to share these in this talk.