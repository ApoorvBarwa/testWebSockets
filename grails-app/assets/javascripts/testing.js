$(function() { 
                var socket = new SockJS("http://localhost:8181/stomp");
                var client = Stomp.over(socket);

                client.connect({}, function() {
                    client.subscribe("/topic/hello", function(message) {
                        $("#helloDiv").append(message.body);
                    });
                });

                $("#helloButton").click(function() {
                    client.send("/app/hello", {}, JSON.stringify("world"));
                });

                /*$("#serviceHelloButton").click(function() {
                    client.subscribe("/topic/serviceHello", function(message) {
                        console.log(message.body)
                        $("#helloDiv").append(message.body);
                    });

                    client.send("/topic/serviceHello", {}, JSON.stringify("serviceWorld"))
                });*/
            });