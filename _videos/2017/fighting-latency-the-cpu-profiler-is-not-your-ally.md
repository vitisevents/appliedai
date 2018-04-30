---
title:  "Fighting latency: the CPU profiler is not your ally"
metatitle: "Fighting latency: the CPU profiler is not your ally"
speaker: Filippo Valsorda
video-id: Lxt8Vqn4JiQ
length: "38:29"
---
When we talk about a 'fast' service we often don't mean one that can process 500MB/s per core, but one that can respond in less than 5ms. However, many causes of latency are invisible to network operations, disk reads, locks, channels, scheduling. Let's see how to use the new tracer to profile them. 
