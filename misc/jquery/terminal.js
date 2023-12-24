var directory = ' /misc/'

$(function() {
    $('body').terminal({
        about: function() {
            this.echo('hello! welcome to sushiwt/misc. here you can access html files that do not fit into the main sections with the command line.');
            this.echo('');
        },
        help: function() {
            this.echo('');
            this.echo('sushiwt/misc commands:');
            this.echo('');
            this.echo('about - tells you about what this section is.');
            this.echo('help - list of commands available (you can also use this as a value for the other commands)');
            this.echo('go [value] - lets you go to any file and folder inside your current folder:' + directory + '.');
            this.echo('');
        },
        go: function(value) {
            if (value == 'help') {
                this.echo('');
                this.echo('here are some values for the go command:');
                this.echo('');
                this.echo('legacy - the old versions of the website');
                this.echo('88x31.html - 88x31 buttons from sites that helped me make my website');
                this.echo('sc36.html - a remake of sc36.net (December 24th, 2023) in my own "style"');
                this.echo('socials.html - a link to more of my socials:');
                this.echo('inactive.html - the old disclaimer about the website being unfinished');
                this.echo('ubuntu-font/demo.html - the ubuntu font demo');
                this.echo('');
            }
            else if (value == '88x31.html' || value == 'sc36.html' || value == 'socials.html' || value == 'inactive.html' || value == 'ubuntu-font/demo.html') {
                this.echo('redirecting...');
                window.location.href = (directory + value);
            }
            else if (value == 'legacy') {
                this.echo('redirecting...');
                window.location.href = ('/legacy');
            }
            else {
                this.echo('oops! thats not a value in "go". try again!')
            }
        },
    }, {
        greetings: 'welcome to the sushiwt terminal! [Version 1.0] \n(uses jqueryterminal (https://terminal.jcubic.pl/)) \n',
        prompt: 'whytee.xyz: /misc/ $ ',
    });
});