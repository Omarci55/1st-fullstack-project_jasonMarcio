/* const products = [
  {
    name: 'water-adel',
    image: '/images/water/water-adel.jpg',
    description: 'Das St. Primus Heilwasser von Adelholzener unterstützt die Funktion von Magen und Darm sowie die Harnausscheidung. Zur Förderung der Verdauung zu den Hauptmahlzeiten ca. 300 ml trinken. Für die Unterstützung der Harnausscheidung über den Tag verteilt 1,5 bis 2,25 l trinken.',
    brand: 'Adel',
    category: 'wine',
    price: 1.09
  },
  {
    name: 'water-badliebenwerda',
    image: '/images/water/water-badliebenwerda.jpg',
    description:'Das regionale Mineralwasser Bad Liebenwerda Naturell in der handlichen 0,75 l Glasflasche, ganz ohne Kohlensäure, ist ausgewogen mineralisiert und harmonisch im Geschmack. Es entspringt einer Quelle inmitten des Naturparks Niederlausitzer Heidelandschaft',
    brand: 'badliebenwerda',
    category: 'Water',
    price: 9.99
  },
  {
    name: 'water-evian',
    image: '/images/water/water-evian.jpg',
    description:'Evian von Danone stammt aus dem in den französischen Alpen gelegenen Ort Évian-les-Bains. Seit 1826 wird Evian offiziell abgefüllt. Das Wasser stammt aus der Cachat-Quelle, die in unmittelbarer Nähe zum Genfersee liegt.',
    brand: 'Evian',
    category: 'Water',
    price: 9.29
  },
  {
    
    name: 'water-gerolsteiner',
    image: '/images/water/water-gerolsteiner.jpg',
    description:'Der Ursprung von Gerolsteiner liegt in der Vulkaneifel bei Trier. Es entsteht ein Wasser mit einer seltenen Kombination aus kohlensäurehaltigem Vulkan- und mineralienreichem Dolomitgestein. 1888 wurde Mineralwasser in Tonkrüge abgefüllt, ab 1900 erstmals in Glasflaschen, seit 1998 als erster deutscher Brunnen Abfüllung in 1 l PET Mehrwegflasche.',
    brand: 'gerolsteiner',
    category: 'Water',
    price: 1.99
  },
  {
    name: 'water-sanpellegrino',
    image: '/images/water/water-sanpellegrino.jpg',
    description:'Im Jahre 1899 erstmals abgefüllt, blickt S. Pellegrino auf eine lange Tradition zurück. Denn bereits im Mittelalter wurde das Felsquellwasser aufgrund der gesundheitsfördernden Wirkung geschätzt. 700 Meter fließt das Wasser durch breite Schichten von Dolomiten- und Gipsgestein, wo es nach 30 Jahren der San Pellegrino-Therme entspringt.',
    brand: 'san pellegrino',
    category: 'Water',
    price: 0.99
  },
  {
    name: 'water-spreequell',
    image: '/images/water/water-spreequell.jpg',
    description:'Spreequell mit Sitz in Berlin feierte 2009 seinen 40. Geburtstag. 1991 erfolgte die Gründung der Spreequell Mineralbrunnen. Spreequell blickt auf eine bewegte Geschichte zurück. Die vielen Veränderungen haben das Unternehmen gestärkt und zu einer modernen Marke geformt.',
    brand: 'spreequell',
    category: 'Water',
    price: 2.99
  },
  {
    name: 'water-volvic',
    image: '/images/water/water-volvic.jpg',
    description:'Volvic Mineralwasser entspringt in 90 m Tiefe dem »Puy de Dome«, einem Vulkan in einem der größten Naturschutzgebiete Europas in der Vulkanlandschaft der Auvergne (Frankreich). Gefiltert durch 6 Gesteinsschichten erhält Volvic seine spezifische Mineralisierung.',
    brand: 'volvic',
    category: 'Water',
    price: 2.99
  },
  {
    name: 'Flensburger Edles Helles',
    image: '/images/bier/flensburger-helles.jpg',
    description:'Flensburg: Am 6. September 1888 unterschrieben fünf Flensburger Bürger die Gründungsurkunde der Flensburger Brauerei und legten damit den Grundstein des Erfolges unseres Flensburger Bieres. Heute einer der weltweit erfolgreichsten Anbieter im Segment der Bügelverschlussflaschen.',
    brand: 'Flensburger',
    category: 'bier',
    price: 2.95
  },
  {
    name: 'Berliner Pilsner',
    image: '/images/bier/berliner.jpg',
    description:'Inhaber der Marke ist die Berliner-Kindl-Schultheiss-Brauerei GmbH, ein Unternehmen der Radeberger Gruppe. Die Marke ist Sponsor von vielen Sport-Vereinen, darunter 1. FC Union Berlin. Brauereiführung ganzjährig von Montag bis Donnerstag.',
    brand: '	Berliner Pilsner',
    category: 'bier',
    price: 1.65
  },
  {
    name: 'Allgäuer Büble Edelbräu',
    image: '/images/bier/berliner.jpg',
    description:'Als eine der ältesten Brauereien Deutschlands kann das Allgäuer Brauhaus mit Stolz auf eine mehr als 600-jährige Tradition zurückblicken. Bereits 1394 berichten die Archive von der Stiftsbrauerei, dem Ursprung des heutigen Allgäuer Brauhauses. 1911 wurde schließlich die Allgäuer Brauhaus AG gegründet.',
    brand: 'ALLGÄUER BÜBLE',
    category: 'bier',
    price: 2.20
  },
  {
    name: 'Neuzeller Schwarzer',
    image: '/images/bier/berliner.jpg',
    description:'1589 Gründung der Klosterbrauerei Neuzelle. Die handwerkliche Braukunst wird über Jahrhunderte bewahrt. 1968 Der Name "Klosterbrauerei" wird verboten, neuer Name: "Brauerei Neuzelle" 1989 Die Brauerei erhält ihren ursprünglichen Namen "Klosterbrauerei" zurück.',
    brand: 'Neuzeller Klosterbräu',
    category: 'bier',
    price: 2.85
  },
  {
    name: 'BRLO Pale Ale',
    image: '/images/bier/berliner.jpg',
    description:"Eine Fränkin, ein Berliner und ein Mecklenburger brauen Craft Beer in Berlin. BRLO ist der alt-slawische Ursprung des Namens Berlin. BRLO ist somit tief verwurzelt in der Geschichte unserer geliebten Hauptstadt, aber gleichzeitig offen für Neuinterpretation",
    brand: 'BRLO',
    category: 'bier',
    price: 6.82
  },
  {
    name: 'Bio Apfelschorle',
    image: '/images/bier/berliner.jpg',
    description:"Eine Fränkin, ein Berliner und ein Mecklenburger brauen Craft Beer in Berlin. BRLO ist der alt-slawische Ursprung des Namens Berlin. BRLO ist somit tief verwurzelt in der Geschichte unserer geliebten Hauptstadt, aber gleichzeitig offen für Neuinterpretation",
    brand: 'Proviant',
    category: 'soda',
    price: 3.16
  },
  {
    name: 'Bio Rhabarber Naturtrüb',
    image: '/images/bier/berliner.jpg',
    description:"Frei nach Omas Rezept: frisch gepresster Orangensaft und ein Spritzer Zitrone für die Frische dazu, reines Quellwasser und ein wenig Bio-Rohrzucker. Keine Aromastoffe, keine Extrakte, keine Zitronensäure.Hier ist nur das drin, was auch rein soll. Alles andere wurde weggelassen.",
    brand: 'Proviant',
    category: 'soda',
    price: 3.16
  },
  {
    name: 'Zitronenlimonade',
    image: '/images/bier/berliner.jpg',
    description:"Das saure Früchtchen im Bunde der Limonade: die Zitronenlimonade. Fritz-Limo Zitronenlimonade ist eine super schmeckende Limonade mit Zitronengeschmack und einem hohen Fruchtanteil. Sie ist weniger süß, bietet mehr Erfrischung mit 6% Zitronensaft und 1% Orangensaft und sie ist ungefiltert trüb. Und für diesen Geschmack werden auch nur natürliche Farbstoffe und natürliche Aromen verwendet.",
    brand: '	Fritz-Limo',
    category: 'soda',
    price: 3.34
  },
  {
    name: 'Merlot 1L',
    image: '/images/bier/berliner.jpg',
    description:"Sie suchen garantierten, zuverlässigen Trinkspaß zum absolut fairen Preis? Die Weine von Claudius Rocher genießen seit Jahren eine hohe Beliebtheit bei unseren Kunden. Top Preis-Genuss-Empfehlung!",
    brand: 'Claudius Rocher',
    category: 'wine',
    price: 9.99
  },
  {
    name: 'Chardonnay 1L',
    image: '/images/bier/berliner.jpg',
    description:"Die Weinlinie Grand Sud ist die meist getrunkene französische Weinmarke in Deutschland. Die Weine aus klassischen Rebsorten sind süffig, angenehm unkompliziert und überzeugen mit einer sehr guten Preis-Genuss-Relation",
    brand: 'Grand Sud',
    category: 'wine',
    price: 7.49
  }
]

export default products
 */