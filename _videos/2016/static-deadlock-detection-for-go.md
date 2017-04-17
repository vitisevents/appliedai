---
title: "Static Deadlock Detection for Go"
metatitle: "Static Deadlock Detection for Go"
speaker: Nicholas Ng
video-id: NOQdkbp-950
length: "0:23:55"
---
Go’s concurrency features differ from mainstream programming languages in that they are based on the high-level and formal model of CSP (or process calculi) by Tony Hoare in 1978. Over the years, a large body of research work was developed for understanding concurrency based on process calculi, but rarely applied directly in programming langauges. I will talk about a static analyser we developed for detecting deadlocks in Go, inspired by a research area which gives “types” to process calculi. In a nutshell, the tool infers “types” for communication between goroutines from Go source code, then construct a bird’s eye view of all communication (also called choreography or global graph) possible at runtime, through which deadlocks and communication problems are discovered.<BR><BR>This talk will focus on the work-in-progress aspects of the tool. No knowledge of CSP/process calculi are needed but some understanding of concurrency in Go and static analysis concepts are expected.