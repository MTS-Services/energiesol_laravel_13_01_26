import { SectionHeader } from '@/components/cards/section-header';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link, router, usePage } from '@inertiajs/react';
import { Download, RefreshCcw } from 'lucide-react';
import { useState } from 'react';
interface Props {
  is_valid_order: boolean,
  estimate: any,
  monitoringSystem: any
}
function CartPrice({ is_valid_order, estimate, monitoringSystem }: Props) {

  const { SystemSetting } = usePage<SharedData>().props;
  const investment = () => {
    const solar_panel_price = Number(estimate.solar_panel.price)
      * Math.ceil(Number(estimate.area) / Number(SystemSetting?.module_unit_in_meter));

    const solar_inverter_price = Number(estimate.solar_inverter.price ?? 0);
    const charger_price = estimate.charger == true ? Number(estimate.solar_inverter.charger_price ?? 0) : 0;
    const battery_price = estimate.battery == true ? Number(estimate.solar_inverter.battery_price ?? 0) : 0;
    const monitoring_system_price = Number(monitoringSystem?.price ?? 0);

    const total = solar_panel_price
      + solar_inverter_price
      + charger_price
      + battery_price
      + monitoring_system_price + wallBoxPrice() + evuFees();

    return total; // ← this is now a NUMBER
  };
  const calculateVat = () => {
    return (investment() * SystemSetting?.vat / 100);
  };

  const calculateDiscount = () => {
    return (investment() * SystemSetting?.discount / 100);
  };

  const wallBoxPrice = () => {
    return Number(SystemSetting?.wallbox_price ?? 0);
  };

  const evuFees = () => {
    return Number(SystemSetting?.evu_fees ?? 0);
  };

  const deliveryFees = () => {
    return Number(SystemSetting?.delivery_fees ?? 0);
  };

  const serviceCharge = () => {
    return Number(SystemSetting?.service_charge ?? 0);
  };

  const calculateTotal = () => {
    return (investment() + calculateVat() - calculateDiscount() + deliveryFees()
      + serviceCharge());
  };

  const capExpenditure = () => {
    const module = Math.ceil(Number(estimate.area) / Number(SystemSetting?.module_unit_in_meter));
    const sub_genereted_electricity = module * SystemSetting?.generate_electricity_per_module; // Yearly Generated Electricty per year
    const grand_total_electricity = sub_genereted_electricity * SystemSetting?.wallbox_boost_electricity; // Yearly Generated Electricty per year
    const inKWh = Math.ceil(grand_total_electricity / 1000);
    return Math.ceil(inKWh * SystemSetting?.unit_price); // Return of the value of total consumed electicity in year in Euro
  };

  const returnInvestmentInYears = () => {
    const years = (calculateTotal() / capExpenditure()).toFixed(2);
    return years;
  }


  const [processing, setProcessing] = useState(false);


  function submitDownloadForm(url: string) {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.style.display = "none";

    const token = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content");
    if (token) {
      const input = document.createElement("input");
      input.name = "_token";
      input.value = token;
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  function handlePdfDownload(e) {
    e.preventDefault();
    setProcessing(true);
    submitDownloadForm(route("order.download", { estimate_id: estimate?.id }));
    setProcessing(false);
  }
  const [processingAnalysis, setProcessingAnalysis] = useState(false);
  const handlePdfDownloadForAnalysis = (e) => {
    e.preventDefault();
    setProcessingAnalysis(true);
    submitDownloadForm(route("order.download.analysis", { estimate_id: estimate?.id }));
    setProcessingAnalysis(false);
  };

  return (
    <div className="relative z-10 mx-auto mb-5 max-w-7xl rounded-lg bg-linear-to-r from-btn-primary/15 to-info/15 px-6 pt-13 pb-5 lg:mb-10 lg:gap-x-10 lg:px-8 lg:py-40">
      <SectionHeader>
        <h2 className="text[40px] px-10 pb-2 text-center font-montserrat text-3xl font-semibold text-secondary lg:px-50">
          Entfesseln Sie Ihr finanzielles Potenzial mit Solarenergie
        </h2>
        <p className="px-0 text-center font-open-sans text-base text-secondary/70 lg:px-35 lg:text-lg">
          {' '}
          {`Wir haben die langfristigen Einsparungen und die Effizienz Ihres maßgeschneiderten PV-Systems sorgfältig analysiert. Durch die Investition Ihres eigenen Kapitals wird ein Gesamtertrag von 30.122,19 € über die nächsten 20 Jahre prognostiziert.`}
        </p>
      </SectionHeader>
      <div className="relative z-10">
        {!is_valid_order && (
          <div className="absolute inset-0 top-0 left-0 z-20 h-full w-full bg-linear-to-r from-info/5 to-btn-primary/5 backdrop-blur-3xl"></div>
        )}
        <div className="mt-10">
          <div>
            <p className="mb-3 flex justify-between px-0 font-open-sans text-base lg:px-15 lg:text-lg">
              <p className="font-open-sans text-lg font-normal text-secondary/80 lg:text-2xl">
                Gesamtinvestition
                <span className="block text-sm font-normal text-secondary/70 lg:text-base">
                  inklusive MwSt. und Einmalzahlung
                </span>{' '}
              </p>
              <span className="font-semibold text-secondary">
                {calculateTotal().toFixed(4)} €
              </span>
            </p>
            <p className="mb-3 flex justify-between px-0 pr-0 font-open-sans text-base lg:px-15 lg:text-lg">
              <span className="font-normal text-secondary/70">
                Amortisation
              </span>{' '}
              <span className="font-semibold text-secondary">
                {returnInvestmentInYears()} Years
              </span>
            </p>
            <p className="mb-2 flex justify-between border-b border-secondary/10 px-0 pr-0 font-open-sans text-lg lg:px-15 lg:text-2xl">
              <span className="font-semibold text-secondary">
                Stromerzeugungskosten
              </span>{' '}
              <span className="text-lg font-semibold text-secondary lg:text-2xl">
                {SystemSetting?.unit_price}€kWh
              </span>
            </p>

            <p className="mb-3 flex items-center justify-between px-0 font-open-sans text-base lg:px-15 lg:text-lg">
              <p>
                <span className="font-semibold text-secondary">
                  Rendite
                  <span className="text-sm text-secondary/70 lg:text-lg">
                    {' '}
                    über 20 Jahre
                  </span>
                </span>
                <span className="block text-sm text-secondary/70 lg:text-lg">
                  mit Eigenkapital
                </span>
              </p>
              <span className="font-semibold text-secondary">
                {(capExpenditure() * 20).toFixed(2)} €
              </span>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <Button
              onClick={handlePdfDownload}
              className="group border border-btn-primary bg-transparent text-secondary transition-all duration-300 ease-in-out hover:bg-btn-primary hover:text-white"
            >
              <Icon
                iconNode={Download}
                variant="circle"
                className="border border-btn-primary bg-transparent text-secondary/70 transition-all duration-300 ease-in-out group-hover:border-white group-hover:text-white"
                iconClassName="text-btn-primary group-hover:text-white transition-colors duration-300 ease-in-out"
              />
              {processing ? "Downloading PDF" : "  Kostenvoranschlag herunterladen"}
            </Button>


            <Button
              onClick={handlePdfDownloadForAnalysis}
              className="group border border-btn-primary bg-transparent text-secondary transition-all duration-300 ease-in-out hover:bg-btn-primary hover:text-white"
            >
              <Icon
                iconNode={Download}
                variant="circle"
                className="border border-btn-primary bg-transparent text-secondary/70 transition-all duration-300 ease-in-out group-hover:border-white group-hover:text-white"
                iconClassName="text-btn-primary group-hover:text-white transition-colors duration-300 ease-in-out"
              />
              {processingAnalysis ? "Downloading PDF" : "Wirtschaftsanalyse herunterladen"}
            </Button>
          </div>

          <div className="flex items-center justify-center pt-21">
            <Link href={route('configurator')} className="inline-flex items-center gap-3 text-secondary/70">
              <Icon
                iconNode={RefreshCcw}
                iconClassName="text-secondary/70 w-4 h-4"
              />
              Konfigurator neu starten
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CartPrice };
