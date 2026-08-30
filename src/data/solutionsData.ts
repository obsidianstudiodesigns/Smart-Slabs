import { SlabSolution, ProjectItem } from '../types';
import heroImage from '../assets/images/hero_concrete_slabs_1788101867899.jpg';
import ribBlockImage from '../assets/images/rib_block_slab_1788101881555.jpg';
import staircaseImage from '../assets/images/concrete_staircase_1788101898063.jpg';
import buildingImage from '../assets/images/modern_concrete_building_1788101910082.jpg';

export const COMPANY_DETAILS = {
  name: 'Smart Slabs',
  brandName: 'smartslabs',
  tagline: 'suspended concrete slabs',
  contactPerson: 'Bevan Williams',
  phone: '082 418 5877',
  internationalPhone: '+27824185877',
  email: 'slabs@smartslabs.co.za',
  address: '148 Fritz Stockenstrom Str., New East End, Bloemfontein',
  location: 'Bloemfontein, Free State',
  website: 'www.smartslabs.co.za',
  operatingHours: 'Mon - Fri: 07:00 - 17:00',
  whatsappLink: 'https://wa.me/27824185877?text=Hello%20Bevan%20from%20Smart%20Slabs,%20I%20would%20like%20to%20request%20a%20quote%20for%20suspended%20concrete%20slabs.',
};

export const SLAB_SOLUTIONS: SlabSolution[] = [
  {
    id: 'hollowcore',
    name: 'Pre-Stressed Hollowcore',
    category: 'slabs',
    tagline: 'High-Capacity Rapid-Span Precast Concrete Slabs',
    description: 'Factory-manufactured pre-stressed concrete slabs featuring longitudinal cylindrical voids that significantly reduce dead weight while delivering maximum structural span capacity and superior deflection control. Ideal for large residential spans, shopping centres, warehouses, and commercial offices.',
    keyFeatures: [
      'Zero formwork and minimal to zero propping required',
      'Rapid crane erection – up to 800m² placed per day',
      'Long unpropped spans with slender structural depth',
      'Immediate safe working platform for following trades',
      'Precision manufactured in strictly controlled factory conditions',
      'Enhanced acoustic damping and 2-hour+ fire rating'
    ],
    idealFor: [
      'Multi-storey commercial developments & retail plazas',
      'Industrial office parks and warehouse mezzanine floors',
      'Luxury residential homes with large open-plan spans',
      'Townhouse complexes & student accommodations in Central SA'
    ],
    maxSpan: 'Up to 11.5m unpropped',
    installationSpeed: 'Fastest (200-800 m²/day)',
    proppingRequirement: 'None / Minimal alignment props',
    fireRating: '120 - 240 Minutes (SANS 10400 compliant)',
    weightCategory: 'Optimized hollow void design (180 - 320 kg/m²)',
    technicalDetails: {
      concreteGrade: '45 - 50 MPa high-strength prestressed concrete',
      reinforcement: 'High-tensile stress-relieved steel strands',
      toppingThickness: '50mm - 70mm structural concrete with steel mesh',
      soundInsulation: 'Rw 52 dB+ airborne sound reduction'
    },
    image: heroImage,
  },
  {
    id: 'lattice-rib-block',
    name: 'Lattice Rib & Block',
    category: 'slabs',
    tagline: 'Versatile Suspended Slab with Hollow or Polystyrene Blocks',
    description: 'The industry-proven suspended flooring system comprising reinforced triangular lattice steel girders cast into high-strength concrete ribs, spaced with lightweight filler blocks and finished with a structural cast-in-place concrete topping. Offers unmatched flexibility for sites with limited crane access.',
    blockOptions: ['Concrete Hollow Blocks', 'Polystyrene (EPS) Lightweight Blocks'],
    keyFeatures: [
      'Available with Heavy-Duty Concrete Hollow Blocks or Ultra-Lightweight Polystyrene Blocks',
      'Polystyrene (EPS) option reduces overall slab dead weight by up to 35%',
      'Exceptional thermal R-value insulation when using EPS blocks',
      'Manual handling possible on congested residential building sites',
      'Simplifies embedded conduit and plumbing layout installations',
      'Engineered layout drawings and full SANS certification included'
    ],
    idealFor: [
      'Residential double-storey houses and additions',
      'Sites with restricted crane or heavy vehicle access',
      'Energy-efficient green architecture builds',
      'Basement covers, suspended patios & garage roofs'
    ],
    maxSpan: 'Up to 7.5m (depending on block depth)',
    installationSpeed: 'Standard (80-150 m²/day)',
    proppingRequirement: 'Temporary propping required at 1.5m - 1.8m intervals',
    fireRating: '90 - 120 Minutes',
    weightCategory: 'Standard Hollow (240 kg/m²) or Ultra-Light EPS (160 kg/m²)',
    technicalDetails: {
      concreteGrade: '30 - 35 MPa rib base + 25-30 MPa in-situ topping',
      reinforcement: 'Triangular high-yield lattice girder & Y-bars',
      toppingThickness: '50mm - 65mm concrete topping with Ref 100/193 mesh',
      soundInsulation: 'High acoustic dampening with acoustic plaster finishes'
    },
    image: ribBlockImage,
  },
  {
    id: 'prestressed-rib-block',
    name: 'Pre-Stressed Rib & Block',
    category: 'slabs',
    tagline: 'High-Tensile Prestressed Ribs with Hollow or Polystyrene Blocks',
    description: 'Combines the versatility of rib & block construction with the enhanced structural strength of pre-tensioned high-yield steel wire ribs. Offers reduced propping periods, shallower slab depths, and extended span performance over conventional reinforced ribs.',
    blockOptions: ['Concrete Hollow Blocks', 'Polystyrene (EPS) Insulation Blocks'],
    keyFeatures: [
      'Pre-tensioned high-yield steel wires provide higher load capacity',
      'Available with either robust concrete hollow blocks or ultra-insulating polystyrene blocks',
      'Less propping needed and earlier striking times compared to standard reinforced ribs',
      'Lower slab profile and reduced steel consumption',
      'Cost-effective solution for residential and light-commercial suspended levels'
    ],
    idealFor: [
      'High-end residential villas and multi-unit developments',
      'Office suspended floors and school classrooms',
      'Hospitality and lodge suites across Free State and Central SA',
      'Projects requiring faster turnaround times than standard rib & block'
    ],
    maxSpan: 'Up to 8.5m',
    installationSpeed: 'Fast (100-200 m²/day)',
    proppingRequirement: 'Reduced propping lines at 2.0m centres',
    fireRating: '90 - 120 Minutes',
    weightCategory: 'Lightweight to Medium (170 - 250 kg/m²)',
    technicalDetails: {
      concreteGrade: '40 MPa prestressed rib core + 25-30 MPa topping',
      reinforcement: '7-wire high-tensile prestressing strands',
      toppingThickness: '50mm - 60mm topping with Ref 100/193 welded mesh',
      soundInsulation: 'Rw 48 dB+'
    },
    image: ribBlockImage,
  },
  {
    id: 'insitu',
    name: 'Insitu Concrete Slabs',
    category: 'slabs',
    tagline: 'Custom Cast-In-Place Reinforced Monolithic Slabs',
    description: 'Engineered on-site reinforced concrete slabs formed, steel-fixed, and poured directly in place. Perfectly suited for unique architectural designs, intricate geometric curves, heavy point loads, cantilevers, and deep structural beam integrations.',
    keyFeatures: [
      'Infinite architectural freedom for curved walls and complex penetrations',
      'Continuous monolithic stiffness and extreme lateral load resistance',
      'Integrated deep downstand or upstand ring beams in single cast',
      'Heavy point load bearing capacity for machinery or rooftop pools',
      'Precision shuttering and smooth soffit off-shutter finishes available'
    ],
    idealFor: [
      'Architectural statement homes with cantilevers and curved facades',
      'Heavy industrial floors, plant rooms, and safe-rooms',
      'Suspended swimming pool decks and heavy water storage roofs',
      'Basement retention slabs and transfer decks'
    ],
    maxSpan: 'Custom engineered to any structural specification',
    installationSpeed: 'Custom (Requires full shuttering & 28-day cure)',
    proppingRequirement: 'Full falsework & formwork shuttering support',
    fireRating: '120 - 240 Minutes',
    weightCategory: 'Heavy monolithic concrete (300 - 450 kg/m²)',
    technicalDetails: {
      concreteGrade: '30 - 40 MPa certified ready-mix concrete',
      reinforcement: 'High-yield deformed steel rebar (Y10 - Y25)',
      toppingThickness: 'Monolithic slab thickness typically 150mm - 300mm',
      soundInsulation: 'Rw 56 dB+ (Supreme airborne & impact insulation)'
    },
    image: buildingImage,
  },
  {
    id: 'windeck',
    name: 'Windeck Solutions',
    category: 'slabs',
    tagline: 'Engineered High-Efficiency Steel & Concrete Composite Decking',
    description: 'High-performance profiled composite steel and concrete decking system. The cold-rolled profiled steel acts as both a permanent tensile reinforcement and safe working shutter platform, drastically slashing installation hours and material transport costs.',
    keyFeatures: [
      'Steel profile doubles as permanent formwork and bottom tensile reinforcement',
      'Eliminates bottom steel fixing and conventional wood formwork stripping',
      'Minimal site storage footprint – stacked nesting sheets',
      'Interlocking side laps provide rapid watertight coverage for lower floors',
      'Ideal for steel-framed and composite concrete multi-storey structures'
    ],
    idealFor: [
      'Commercial multi-storey office buildings and hotels',
      'Mezzanine floor expansions in existing warehouses',
      'Steel-frame structures and fast-track industrial developments',
      'Projects with tight construction timelines'
    ],
    maxSpan: 'Up to 6.0m continuous span',
    installationSpeed: 'Very Rapid (300-500 m²/day)',
    proppingRequirement: 'Single temporary prop line during casting',
    fireRating: '90 - 120 Minutes with fire mesh reinforcement',
    weightCategory: 'Lightweight composite (160 - 220 kg/m²)',
    technicalDetails: {
      concreteGrade: '25 - 30 MPa structural lightweight or normal concrete',
      reinforcement: 'High-strength galvanized steel deck profile + top anti-crack mesh',
      toppingThickness: '60mm - 80mm cover above profile crests',
      soundInsulation: 'Rw 50 dB+'
    },
    image: heroImage,
  }
];

export const STAIRCASES_SOLUTIONS = [
  {
    id: 'concrete-staircases',
    name: 'Concrete Staircases',
    type: 'Pre-Cast & Insitu Options',
    tagline: 'Precision Engineered Concrete Flights & Custom Landings',
    description: 'Engineered concrete staircases delivering permanent structural permanence, zero foot-traffic noise, and high fire resistance. Available in factory pre-cast flights for instant crane placement or custom on-site in-situ cast flights for unique architectural curves and floating cantilever treads.',
    options: [
      'Factory Pre-Cast Flights: Ready for crane installation, immediate site access',
      'Insitu Cast Staircases: Tailored to bespoke architectural curves, dog-legs, and landings',
      'Floating & Cantilevered Step Designs: Contemporary minimalist aesthetics',
      'Smooth off-shutter finish ready for tiling, hardwood cladding, or polished concrete'
    ],
    idealFor: ['Luxury homes', 'Commercial fire escapes', 'Shopping centres', 'Apartment stairwells'],
    image: staircaseImage
  },
  {
    id: 'steel-staircases',
    name: 'Structural Steel Staircases',
    type: 'Industrial & Architectural Steel',
    tagline: 'Heavy-Duty Industrial Stringers & Modern Architectural Steel',
    description: 'Precision fabricated structural steel staircases designed for sleek modern interiors, external fire escapes, industrial plant access, and warehouse mezzanine connections. Manufactured with premium South African steel and anti-corrosion coatings.',
    options: [
      'Architectural mono-stringer & twin-channel stringers with open risers',
      'Heavy-duty industrial galvanized access stairs and safety handrails',
      'Composite steel pan treads with concrete or timber infills',
      'Custom fabricated to exact site architectural and structural drawings'
    ],
    idealFor: ['Industrial warehouses', 'Modern loft offices', 'External fire escapes', 'Mezzanine access'],
    image: buildingImage
  }
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Pre-Stressed Hollowcore Commercial Park',
    category: 'Hollowcore',
    location: 'New East End, Bloemfontein',
    area: '2,400 m²',
    description: 'Fast-track supply and crane erection of 180mm hollowcore slabs with 60mm structural topping for high-load warehouse mezzanine and executive offices.',
    image: heroImage
  },
  {
    id: 'proj-2',
    title: 'Luxury Double-Storey Residential Residence',
    category: 'Rib & Block',
    location: 'Wild Olive Estate, Bloemfontein',
    area: '480 m²',
    description: 'Lattice rib & block installation with ultra-lightweight Polystyrene (EPS) blocks for enhanced thermal insulation and reduced foundation load.',
    image: ribBlockImage
  },
  {
    id: 'proj-3',
    title: 'Architectural Cantilever Floating Staircase',
    category: 'Staircases',
    location: 'Woodland Hills Wildlife Estate, Bloemfontein',
    area: '2 Flights',
    description: 'Pre-cast off-shutter architectural concrete floating staircase with seamless integrated landings and recessed LED lighting conduits.',
    image: staircaseImage
  },
  {
    id: 'proj-4',
    title: 'Multi-Storey Medical Centre & Suites',
    category: 'Commercial',
    location: 'Westdene, Bloemfontein',
    area: '1,850 m²',
    description: 'Pre-stressed rib & block suspended flooring engineered to handle sensitive diagnostic equipment loads with superior acoustic isolation.',
    image: buildingImage
  },
  {
    id: 'proj-5',
    title: 'Monolithic Insitu Suspended Pool & Deck',
    category: 'Insitu',
    location: 'Rayton, Bloemfontein',
    area: '320 m²',
    description: 'High-strength waterproof 35 MPa in-situ concrete suspended deck engineered for a cantilevered rim-flow swimming pool.',
    image: ribBlockImage
  },
  {
    id: 'proj-6',
    title: 'Industrial Warehousing Steel Mezzanine & Stairs',
    category: 'Staircases',
    location: 'Hamilton Industrial, Bloemfontein',
    area: '650 m²',
    description: 'Structural steel staircase flights with galvanized checker-plate treads and windeck composite slab mezzanine flooring.',
    image: heroImage
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Plan Submission & Structural Assessment',
    description: 'Submit your architectural or structural plans. Our engineering team conducts a thorough load, span, and deflection calculation to recommend the most cost-effective slab & staircase solution.',
    duration: '24 - 48 Hours'
  },
  {
    step: '02',
    title: 'Precision Quotation & Engineering Layout',
    description: 'Receive a transparent, itemized quotation including slab layout drawings, propping schedules, engineer certification requirements, and delivery logistics in Bloemfontein & Central SA.',
    duration: '1 - 2 Days'
  },
  {
    step: '03',
    title: 'Quality Controlled Manufacturing',
    description: 'Slabs, ribs, and precast components are cast in controlled conditions using high-grade cement, tested aggregate, and certified prestressing steel adhering to strict SANS standards.',
    duration: '3 - 7 Days'
  },
  {
    step: '04',
    title: 'On-Site Delivery & Crane Erection',
    description: 'Timely site delivery via our dedicated transport fleet with on-site crane placement or systematic rib & block offloading, supervised by experienced technical rigging personnel.',
    duration: 'Same-Day Placement'
  },
  {
    step: '05',
    title: 'Reinforcement, Topping & Sign-off',
    description: 'Placing of welded wire mesh, edge formwork, services conduits, and pouring of certified concrete topping, followed by final structural compliance inspection and engineer sign-off.',
    duration: 'Final Handover'
  }
];

export const FAQS = [
  {
    question: 'Why choose Polystyrene (EPS) blocks over standard Concrete Hollow Blocks in Rib & Block?',
    answer: 'Polystyrene (EPS) blocks are up to 80% lighter than concrete blocks, reducing the total slab dead weight by up to 35%. This significantly lowers stress on load-bearing brickwork and foundations. Additionally, EPS provides superior thermal insulation (keeping rooms cooler in summer and warmer in Free State winters) and is much faster to carry and position on high floors without crane access.'
  },
  {
    question: 'How fast can Pre-Stressed Hollowcore slabs be installed?',
    answer: 'Hollowcore slabs are among the fastest suspended floor systems in the world. A standard crane rig can place between 300m² and 800m² in a single day. Because hollowcore requires zero under-slab propping, lower levels are immediately safe and clear for electrical, plumbing, and drywall contractors to begin work immediately.'
  },
  {
    question: 'What information do you need to provide an accurate quotation?',
    answer: 'We require a copy of your architectural plans (floor plans, sections, and foundation layout if available) in PDF or CAD format, the site location (e.g., Bloemfontein or surrounding Free State towns), and whether crane access is available. You can upload your plans directly through our online quote form or WhatsApp them to Bevan Williams at 082 418 5877.'
  },
  {
    question: 'Do Smart Slabs solutions come with engineering certification (Form 4)?',
    answer: 'Yes. All our suspended slab systems, prestressed components, and concrete staircases are designed and engineered in compliance with South African National Standards (SANS 10400 / SANS 10100). Structural engineer design certificates and Form 4 completion sign-offs can be coordinated directly with our registered Pr.Eng structural partners.'
  },
  {
    question: 'What areas do Smart Slabs service from Bloemfontein?',
    answer: 'Our manufacturing and distribution hub is located at 148 Fritz Stockenstrom Str., New East End, Bloemfontein. We service all suburbs of Bloemfontein (including Woodland Hills, Wild Olive, Rayton, Westdene, Langenhoven Park) as well as the broader Free State, Northern Cape, and Lesotho border regions.'
  },
  {
    question: 'Can you manufacture both pre-cast and in-situ staircases?',
    answer: 'Yes! We manufacture precision factory pre-cast concrete staircases ready for immediate crane landing on site, as well as on-site in-situ cast staircases for custom architectural geometries, spiral staircases, and cantilevered floating steps. We also fabricate heavy-duty structural steel staircases.'
  }
];
