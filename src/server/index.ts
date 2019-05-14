import * as dotenv from 'dotenv';

import createApp from 'src/app/createApp';

dotenv.config();

const PORT = process.env.PORT || 4000;
const server = createApp();
server.listen(PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`server listening on port ${PORT}`);
});
