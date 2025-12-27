/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "MMM-MoonPhase",
  			position: "top_left",
  			config: {
    			updateInterval: 43200000,
				hemisphere: "N",
				resolution: "detailed",
				basicColor: "white",
				title: true, 
				phase: true, 
				size: 120,
				moonAlign: "left",
				textAlign: "left",
				alpha: 0.8
			}
		},
		{
    		module: "MMM-Snow",
    		position: "fullscreen_below",
    		config: {
        		flakeCount: 100,
        		theme: "winter"
    		}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				compliments: {
					anytime: ["Hey there sexy!"],

					morning: [
						"Sistem radi.Korisnik još ne",
						"Buđenje uspešno. Motivacija...u potrazi"
					],

					afternoon: [
						"If you came this far, it means that day is going well.",
						"Still standing? Impressive.",
						"Sistem stabilan. Energija..diskutabilna.",
						"Pravac kunjica da napraviš kaficu."
					],

					evening: [
						"It's okay to slow down now.",
						"Vreme je za opuštanje!"
					]
				}
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 43.8556,
				lon: 19.8425
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Vreme u Užicu",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 43.8556,
				lon: 19.8425
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Kako Tanjug javlja",
						url: "https://www.tanjug.rs/rss/ekonomija/srbija"
					},
					{
						title: "Kako Tanjug javlja",
						url: "https://www.tanjug.rs/rss/ekonomija/svet"
					},
					{
						title: "Kako Tanjug javlja",
						url: "https://www.tanjug.rs/rss/nauka"
					},
					{
						title: "Kako Tanjug javlja",
						url: "https://www.tanjug.rs/rss/zanimljivosti"
					},
					{
						title: "Kako Tanjug javlja",
						url: "https://www.tanjug.rs/rss/ekonomija/kompanije"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
