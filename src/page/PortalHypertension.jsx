import React from "react";

const PortalHypertension = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header
        className="text-center py-12 text-white rounded-lg shadow-xl transition-transform transform hover:scale-105"
        style={{
          background:
            "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide font-sans">
          Portal Hypertension
        </h1>
        <p className="mt-6 text-xl sm:text-2xl font-medium font-serif">
          Insights, Causes, and Treatments
        </p>
        <br />
        <p>- By Shivani Talekar.</p>
        <p>4th year (33)</p>
      </header>

      <main className="mt-6 space-y-8">
        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-300 pb-2">
              Overview
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
              <li>
                Portal Hypertension is an abnormal increase in the blood pressure within the portal venous system, which consists of the portal vein and its branches.
              </li>
              <li>
                The portal vein carries blood from the digestive organs (stomach, intestines, spleen, and pancreas) to the liver.
              </li>
              <li>
                Normal portal vein pressure is between 5–10 mmHg. Portal hypertension is defined as a portal vein pressure above 12 mmHg.
              </li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Causes of Portal Hypertension
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Pre-hepatic Causes (Before the liver):</li>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Portal vein thrombosis (clot in the portal vein)</li>
                <li>Splenic vein thrombosis</li>
                <li>Congenital abnormalities</li>
              </ul>
              <li>Intra-hepatic Causes (Within the liver):</li>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Cirrhosis (Most common cause) due to alcohol, hepatitis B/C, non-alcoholic fatty liver disease (NAFLD)</li>
                <li>Fibrosis (scar tissue formation in the liver)</li>
                <li>Schistosomiasis (parasitic infection)</li>
                <li>Hepatic fibrosis due to genetic disorders</li>
              </ul>
              <li>Post-hepatic Causes (After the liver):</li>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Budd-Chiari syndrome (blockage of hepatic veins)</li>
                <li>Right-sided heart failure</li>
                <li>Constrictive pericarditis</li>
              </ul>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Pathophysiology
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Increased Resistance: Liver damage (e.g., cirrhosis) leads to scarring and nodules, increasing resistance to blood flow.</li>
              <li>Increased Portal Blood Flow: Vasodilation in the splanchnic circulation increases blood flow to the portal system.</li>
              <li>Collateral Circulation: To bypass the high-pressure portal system, blood diverts to smaller veins, causing varices.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Signs and Symptoms
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Gastrointestinal Bleeding: Esophageal or gastric varices (dilated veins) can rupture, causing vomiting of blood (hematemesis) or black stools (melena).</li>
              <li>Splenomegaly: Enlarged spleen due to increased blood pressure.</li>
              <li>Ascites: Accumulation of fluid in the abdomen.</li>
              <li>Caput Medusae: Distended abdominal veins visible under the skin.</li>
              <li>Hepatic Encephalopathy: Confusion, altered mental status due to toxins bypassing the liver.</li>
              <li>Hemorrhoids: Due to rectal varices.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Diagnosis
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Clinical Examination: Signs of liver disease, ascites, splenomegaly.</li>
              <li>Laboratory Tests: Liver function tests (ALT, AST, bilirubin), CBC (for anemia or low platelets).</li>
              <li>Imaging: Ultrasound with Doppler: To detect portal vein thrombosis or ascites. CT Scan/MRI: Detailed imaging of the portal system.</li>
              <li>Endoscopy: To detect esophageal and gastric varices.</li>
              <li>Hepatic Venous Pressure Gradient (HVPG): Measures portal pressure indirectly. Values 12 mmHg indicate significant portal hypertension.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Complications
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Variceal Bleeding: Life-threatening if esophageal or gastric varices rupture.</li>
              <li>Ascites: Leads to abdominal discomfort, infection (spontaneous bacterial peritonitis).</li>
              <li>Hepatic Encephalopathy: Mental confusion, coma.</li>
              <li>Hypersplenism: Low blood cell counts (anemia, thrombocytopenia).</li>
              <li>Hepatorenal Syndrome: Kidney failure due to liver disease.</li>
            </ul>
          </div>
        </section>

           <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Image Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="ph1.jpg"
                  alt="1"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="ph2.jpg"
                  alt="2"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="ph3.jpg"
                  alt="3"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="ph4.jpg"
                  alt="4"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="ph5.jpg"
                  alt="5"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Treatment
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Managing Underlying Cause: Cirrhosis Management: Alcohol cessation, antiviral therapy for hepatitis. Portal Vein Thrombosis: Anticoagulation therapy.</li>
              <li>Reducing Portal Pressure: Non-selective Beta-Blockers: Propranolol, Nadolol to reduce portal pressure. Nitrates: To dilate blood vessels and lower pressure.</li>
              <li>Prevention and Treatment of Variceal Bleeding: Endoscopic Variceal Ligation (EVL): Banding of varices. Sclerotherapy: Injection to shrink varices. Vasoactive Drugs: Octreotide to reduce blood flow.</li>
              <li>Managing Ascites: Salt Restriction and Diuretics: Spironolactone, Furosemide. Paracentesis: Removal of fluid from the abdomen. Albumin Infusion: To prevent kidney failure during large-volume paracentesis.</li>
              <li>Advanced Interventions: Transjugular Intrahepatic Portosystemic Shunt (TIPS): A stent placed between the portal and hepatic veins to reduce pressure. Liver Transplantation: For end-stage liver disease.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Prognosis
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>The prognosis depends on the underlying cause and severity.</li>
              <li>Cirrhosis-related portal hypertension has a poorer outcome, especially with complications like variceal bleeding and ascites.</li>
              <li>TIPS and liver transplantation improve survival in selected patients.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Prevention
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Avoid Alcohol: To prevent cirrhosis.</li>
              <li>Vaccination: Against hepatitis B.</li>
              <li>Screening: Regular endoscopy in cirrhotic patients to check for varices.</li>
              <li>Healthy Lifestyle: Managing obesity, diabetes, and avoiding hepatotoxic drugs.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="text-center mt-8 py-4 bg-gray-800 text-white rounded-md">
        <p>© 2024 Portal Hypertension Resource</p>
      </footer>
    </div>
  );
};

export default PortalHypertension;