# Mosaic Game

This is my approach to the case of implementing the mosaic game. It was done in about 4 hours.

## Considerations

- I did not have previous hands-on experience with Next.js, SWR or Prisma. Of course I had heard about the technologies but never worked with them so I had to read some documentation for doing kind of trivial stuff. That did not block me, but slowed me down a bit as the concepts are pretty much the same as any other libraries that I had previously worked with.

- I'm not 100% satisfied with the organization of the files and folders. As this was coded in kind of a rush plus the fact that I'd never worked with Next.js I had to follow my previous knowledge of React, which might not be the optimal or canonical way of doing stuff with Next.js. Anyway, I tried to follow Clean Code principles of not making files too big, meaningful names, modules with single responsibility, etc.

## Potential improvements

- I would have liked to implement at least some simple unit tests for the mosaic page but did not have time to do it. Might do it afterwards if I have some time for my own reference on how to test stuff on Next.

- I would have liked to implement the bonus multiplayer mode with Sockets, but again time constraints made it impossible. Might also do it for myself yo work with Sockets.

- Styling is not the best in the world - actually is barely good enough, but that was not high on my priority list.

- Tried to deploy the using Vercel but afterwards I found out that it does not support SQLite. A potential improvement could be to move it to some persistent DB system compatible with Vercel and deploy it.