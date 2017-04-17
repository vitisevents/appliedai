---
title: Complex Concurrency
metatitle: Complex Concurrency
speaker: Evan Huus
video-id: 2HOO5gIgyMg
length: "0:53:45"
---
There is a lot of power available through Go's concurrency primitives, but they are still just that: primitives. Typical examples of channel and goroutine usage show pipelines and worker pools, but real applications are rarely that simple. Production systems can easily end up with hundreds of goroutines running dozens of interdependent functions; reasoning about the resulting interactions is not easy. 

Shopify's Sarama library is an open-source fat client for LinkedIn's Kafka project. It is heavily concurrent, making use of Go’s concurrency primitives to build several complex patterns, including fanout-and-shuffle among others. This talk will cover some of the patterns used in Sarama, including the challenges faced, problems overcome, and trade-offs made. Sarama has been running in production for nearly a year and a half across Shopify's infrastructure, processing hundreds of millions of messages per day.