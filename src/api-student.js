exports.plugin = {
  name: 'api-student',
  version: '1.4.0',
  register: (server) => {
    server.route({
      method: 'GET',
      path: '/api/student',
      handler: () => ({ hello: 'student' }),
    });

    server.route({
      method: 'GET',
      path: '/api/slow-fruit-student',
      handler: () => {
        const DELAY = 2 * 1000; // 2 sec
        const OUT = {
          apple: 'green',
          banana: 'gold',
          cherry: 'red',
          durian: 'blue',
          eggplant: 'purple',
          'fuji-apple': 'lightgreen',
          grape: 'magenta',
        };

        return new Promise((resolve) => setTimeout(resolve, DELAY, OUT));
      },
    });

    server.route({
      method: 'GET',
      path: '/api/fruit-student',
      handler: (request, reply) => {
        // output blank, xml, json
        console.log(`Format = (${request.query.format})`); // eslint-disable-line no-console
        // PHP is echo($_GET['format']) // outputs blank, xml, json

        if (request.query.format === 'xml') {
          return reply
            .response('<fruits><fruit name="apple">green</fruit><fruit name="banana">yellow</fruit><fruit name="cherry">red</fruit></fruits>')
            .type('application/xml');
        }

        return {
          apple: 'green',
          banana: 'yellow',
          cherry: 'red',
          durrian: 'brown',
          eggplant: 'purple',
        };
      },
    });
  },
};
