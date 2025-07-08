# Bass-Typography-Principles-in-the-Web
Dieses Projekt ist Teil meiner Bachelorarbeit im Studiengang Medieninformatik an der Technischen Hochschule Köln. Der Titel dieser Bachelorarbeit ist: Die Kunst der Titelsequenz: Die Übertragbarkeit der Prinzipien von Saul Bass’ Typografie auf das Web. Eine Untersuchung zur Umsetzung mit Web-Standard-Methoden für Animation.

## Projektziel
Ziel dieser Arbeit war es, typografische Gestaltungsprinzipien aus den Titelsequenzen von Saul Bass prototypisch im Web umzusetzen. Die Arbeit versteht sich als eine gestalterisch-technische Auseinandersetzung mit animierter Typografie im Kontext von Webstandards (HTML, CSS, JavaScript, SVG).

## Idee
Die animierte Typografie in Filmtitelsequenzen erzeugt eine starke visuelle Wirkung und unterstützt die emotionale Einstimmung auf den Film. Sie vermittelt Tonalität, Atmosphäre und oft auch erzählerische Hinweise. Im Web hingegen bleibt Typografie meist auf funktionale Aufgaben beschränkt. Dieses Projekt untersucht, wie sich gestalterische Prinzipien filmischer Typografie auf das Web übertragen lassen, um dort ebenfalls eine inszenierende, emotionale Wirkung zu entfalten.

## Projektstruktur

Das Projekt besteht aus:
- Einer Landing Page (index.html)
- Drei eigenständigen Unterseiten (glitch.html / symbolism.html / system.html)
- Einer Impressum-Seite
- Assets-Ordner für CSS / Javascript / Bilder / Schriftarten

## Installation

### Voraussetzungen
- Ein moderner Browser mit Developer Tools (**Google Chrome** ist empfehlenswert)
- Ein Code-Editor wie **Visual Studio Code**
- Die Visual Studio Code-Erweiterung **Live-Server** (oder ein beliebiger lokaler HTTP-Server)

### Lokale Ausführung
 1. Repository klonen
git clone https://github.com/VassjaM/Bass-Typography-Principles-in-the-Web.git

 2. Lokalen Server der index.html mit Live-Server starten

 3. Im Browser die Developer Tools öffnen

 4. Die Bildschirmgröße auf 1920x1080 Pixel einstellen

### Github Pages Ausführung
Webseite ist auch unter diesem Link erreichbar, muss aber trotzdem an die Bildschirmgröße 1920x1080 Pixel angepasst werden: https://vassjam.github.io/Bass-Typography-Principles-in-the-Web/


## Architekturentscheidungen 
- Es wurde bewusst auf Frameworks (z. B. React, Vue, GSAP) verzichtet, um ausschließlich mit Webstandards zu arbeiten.
- SVGs wurden als Inline-Code eingebunden, um eine gezielte Kontrolle einzelner animierter Pfade zu ermöglichen.
- Die Prototypen sind nicht responsive umgesetzt, da der Fokus auf der Darstellung von Prinzipien bei der definierten Bildschirmauflösung liegt.


## english

This project is part of my bachelor’s thesis in the Media Informatics program at the Technical University of Applied Sciences Cologne.
The title of the thesis is: “The Art of the Title Sequence: The Transferability of Saul Bass’s Typographic Principles to the Web: An Investigation into Implementation Using Web Standard Methods for Animation.”

## Project Objective
The aim of this work was to translate typographic design principles from Saul Bass’s film title sequences into prototype implementations on the web.
The project serves as a design-technical exploration of animated typography using web standards (HTML, CSS, JavaScript, SVG).

## Concept
Animated typography in film title sequences creates strong visual impact and helps establish the emotional tone of a film. It conveys mood, atmosphere, and often narrative cues.
On the web, however, typography is mostly limited to functional use.
This project investigates how cinematic typographic principles can be adapted to the web in order to achieve a similarly immersive and expressive experience.

## Project Structure
The project consists of:
- A landing page (index.html)
- Three standalone example pages (glitch.html, symbolism.html, system.html)
- An imprint page (impressum.html)
- An assets folder containing CSS, JavaScript, images, and fonts

## Installation

### Requirements
- A modern desktop browser with developer tools (**Google Chrome** recommended)
- A code editor such as **Visual Studio Code**
- The **Live Server** extension for VS Code (or any local HTTP server)

### Running Locally
1. Clone the repository: git clone https://github.com/VassjaM/Bass-Typography-Principles-in-the-Web.git

2. Open the project in your editor and start index.html using Live Server

3. Open the browser’s developer tools

4. Set your screen resolution to 1920×1080 pixels

### Running via GitHub Pages

The project is also available at the following link: https://vassjam.github.io/Bass-Typography-Principles-in-the-Web/

Note: The display is optimized for 1920×1080 px and not responsive.

## Architectural Decisions
- Frameworks (e.g., React, Vue, GSAP) were deliberately avoided in order to work exclusively with web standards.
- SVGs are embedded as inline code to allow precise control over individual animated paths.
- The prototypes are not implemented responsively, as the focus lies on illustrating typographic principles at a fixed screen resolution.