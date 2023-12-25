var directory = ' /misc/'
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
var shell = 0

function green(message) {
    return "[[b;#65995F;black]" + message + "]";
}

var userAgent = navigator.userAgent;

var osRegex = /(Windows|Macintosh|Linux|Android|iOS)/i;
var archRegex = /x86_64|Win64|WOW64|Intel Mac OS X/;

var osMatch = userAgent.match(osRegex);
var archMatch = userAgent.match(archRegex);

var os = osMatch ? osMatch[0] : "Unknown OS";
var architecture = archMatch ? archMatch[0] : "Unknown Architecture";
   
if (os == 'Windows') {
    shell = 'Aero'
}
else if (os == 'Macintosh') {
    shell == 'Aqua'
}
else if (os == 'Linux') {
    shell = 'dunno lol youre on linux you can change whatever'
}
else {
    shell =  'Unknown'
}

// Function to calculate time difference
function getTimeDifference() {
    // Set the target date (April 1, 2023)
    const targetDate = new Date('2023-04-01T00:00:00');
    
    // Get the current date and time
    const currentDate = new Date();
    
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - targetDate;
    
    // Calculate days, hours, and minutes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    
    // Return the result as an object
    return {
        days: days,
        hours: hours,
        minutes: minutes
    };
}

// Get the time difference
const timeDifference = getTimeDifference();

// Display the result
console.log(`${timeDifference.days} days, ${timeDifference.hours} hours, ${timeDifference.minutes} minutes`);

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
        neofetch: function() {
            console.log(navigator.userAgent)
            this.echo('');
            this.echo('                                            ████████                  [[b;#65995F;black]sushiwt]/[[b;#65995F;black]site]');
            this.echo('                ██████████████      ████████        ██                ----------------------------');
            this.echo('            ████              ██████                  ██              [[b;#99507F;]OS:] ' + os + ' ' + architecture);
            this.echo('          ██                                  ████      ██            [[b;#99507F;]Host:] GitHub Pages');
            this.echo('        ██        ██████████        ████  ██████████      ██          [[b;#99507F;]Kernel:] null');
            this.echo('      ██      ██████████████████  ██████  ████████████      ██        [[b;#99507F;]Uptime:] ' + `${timeDifference.days} days, ${timeDifference.hours} hours, ${timeDifference.minutes} minutes`);
            this.echo('    ██      ██████████████████████  ██████  ████████████    ██        [[b;#99507F;]Packages:] 1');
            this.echo('  ██      ██████████████████████████  ████  ████████████    ██        [[b;#99507F;]Shell:] https://whytee.xyz/misc/');
            this.echo('  ██    ██████████████████████████████  ████  ████████      ██        [[b;#99507F;]Resolution:] ' + screenWidth + 'x' + screenHeight);
            this.echo('@   @@@@@@@@@@@@@@@ @@ @@@@  @        [[b;#99507F;]DE:] ' + shell);
            this.echo('@  @@@@@@@@@@ @@@@ @  @@@@@  @        [[b;#99507F;]WM:] sushiwt/theme 4.0');
            this.echo('@  @@@@ @@@@ @ @@ @@ @@@@@   @        [[b;#99507F;]WM theme:] Rule34 Green');
            this.echo('@  @@@ @ @@ @@ @ @@@ @@@@@  @         [[b;#99507F;]Terminal:] JQueryTerminal');
            this.echo('@  @@ @@ @ @@@@ @@@@ @@@@@  @         [[b;#99507F;]Terminal Font:] monospace');
            this.echo('@  @ @@@@ @@@@@@@@@@ @@@@   @         [[b;#99507F;]CPU:] null');
            this.echo('@   @@@@@@@@@@@@@@@ @@@@@   @         [[b;#99507F;]GPU:] null');
            this.echo(' @  @@@@@@@@@@@ @@@ @@@@@@   @        [[b;#99507F;]Memory:] ????MiB / ????MiB');
            this.echo(' @   @@@@@ @@@@ @@   @@@@@@   @  ');
            this.echo('  @   @@@@ @@@@@@    @@@@@@@   @      ███[[b;#65995F;black]███][[b;#D6FFD1;black]███][[b;#AAE5A4;black]███][[b;#99507F;black]███][[b;#E6A5CF;black]███]');
            this.echo('   @   @@@@@@@@@      @@@@@@@  @ ');
            this.echo('    @    @@@@@     @           @ ');
            this.echo('     @           @@ @         @  ');
            this.echo('      @@       @@    @@@@@@@@@   ');
            this.echo('        @@@@@@@                  ');
            this.echo('');
            this.echo('');
            this.echo('');
            
        }
    }, {
        greetings: 'welcome to the [[b;#65995F;black]sushiwt terminal]! [Version 1.1.３] \n(uses jqueryterminal (https://terminal.jcubic.pl/)) \n',
        prompt: '[[b;#65995F;black]https://whytee.xyz]: [[b;#E6A5CF;black]/misc/] $ ',
    });
});
