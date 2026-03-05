// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add smooth scroll behavior to all navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// Add active state to navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.opacity = '1';
        if (link.getAttribute('href').substring(1) === current) {
            link.style.opacity = '0.6';
            link.style.borderBottom = '2px solid white';
        } else {
            link.style.borderBottom = 'none';
        }
    });
});

// ehhhh TEXT BUTTONS
function changeText() {
document.getElementById("demo").innerHTML = "Hello JavaScript!";    
}

function myFunction() {
    document.getElementById("demoj").innerHTML = "Paragraph changed.";
    }

    document.getElementById("demog").innerHTML = 5 + 12 + 15;
// MATH
    let 
    y = 110;
    x = 51;
    document.getElementById("demo4").innerHTML = x + y;  

    document.getElementById("demo5").innerHTML = y - x;
    document.getElementById("demo6").innerHTML = x; 
// FN+F12 for the console, where you can see HELLO
function sayHello(name) {
    console.log("Hello, " + name + "!");
}
sayHello("Paul");
sayHello("Marlo");


// LIGHTBULB
function changeImage() {
    console.log("Button wurde geklickt!");
    const image = document.getElementById('myImage');
    console.log("Aktuelles Bild:", image.src);
    
    if (image.src.includes('lightbulb-on.png')) {
        image.src = 'lightbulb-off.png';
        console.log("Geändert zu:lightbulb-off.png");
    } else {
        image.src = 'lightbulb-on.png';
        console.log("Geändert zu:lightbulb-on.png");
    }
}

// TEXT BIG-SMALL
function changeTextSize () {
    document.getElementById("demo8").style.fontSize ="120px";
}
function resetTextSize () {
    document.getElementById("demo8").style.fontSize ="40px";
}




// CHANGES TEXT SIZE AND COLOR
function toggleDemo9() {
    const el = document.getElementById('demo9');
    if (el.style.color === 'blue') {
        el.style.color    = '';
        el.style.fontSize = '';
    } else {
        el.style.color    = 'blue';
        el.style.fontSize = '120px';
    }
}


function toggledemo10() {
    document.getElementById("demo10").style.color= "yellow"
}