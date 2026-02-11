import AppLogo from "@/components/app-logo";
import { BoxCard } from "@/components/cards/box-card";
import { SectionHeader } from "@/components/cards/section-header";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { SharedData } from "@/types";
import { Link, router, usePage } from "@inertiajs/react";
import { CircleCheckBig, Download, RefreshCcw } from "lucide-react";
import { useState } from "react";

function CartDetails(
  { is_valid_order, estimate, monitoringSystem }: { is_valid_order: boolean; estimate: any; monitoringSystem: any },
) {
  const { SystemSetting } = usePage<SharedData>().props;

  const items = [
    {
      title: estimate?.solar_panel?.title,
      description: estimate?.solar_panel?.description,
      image_url: estimate?.solar_panel?.image_url,
      short_info: {
        title: estimate?.solar_panel?.brand_title,
        description: estimate?.solar_panel?.note,
      },
    },
    {
      title: estimate?.solar_inverter?.title,
      description: estimate?.solar_inverter?.description,
      image_url: estimate?.solar_inverter?.image_url,
      short_info: {
        title: estimate?.solar_inverter?.brand_title,
        description: estimate?.solar_inverter?.note,
      },
    },
  ];

  if (estimate?.charger == true) {
    items.push({
      title: estimate?.solar_inverter?.charger_title,
      description: estimate?.solar_inverter?.charger_description,
      image_url: estimate?.solar_inverter?.charger_image_url,
      short_info: {
        title: estimate?.solar_inverter?.charger_brand_title,
        description: estimate?.solar_inverter?.charger_note,
      },
    });
  }

  if (estimate?.battery == true) {
    items.push({
      title: estimate?.solar_inverter?.battery_title,
      description: estimate?.solar_inverter?.battery_description,
      image_url: estimate?.solar_inverter?.battery_image_url,
      short_info: {
        title: estimate?.solar_inverter?.battery_brand_title,
        description: estimate?.solar_inverter?.battery_note,
      },
    });
  }

  items.push({
    title: monitoringSystem?.title,
    description: monitoringSystem?.description,
    image_url: monitoringSystem?.image_url,
    short_info: {
      title: "",
      description: monitoringSystem?.sub_title,
    },
  });

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
      + monitoring_system_price +  wallBoxPrice() + evuFees();

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
    return (investment() + calculateVat() - calculateDiscount()  + deliveryFees()
      + serviceCharge());
  };

  //  href={route('order.download', { id: estimate?.id })} method='post' onClick={e=> e.preventDefault()}
  const [processing, setProcessing] = useState(false);

  function handlePdfDownload(e) {
    e.preventDefault();
    setProcessing(true); // start
    router.post(route("order.download", { id: estimate?.id }), {
      onSuccess: () => {
        setProcessing(false);
      },
      onError: () => {
        setProcessing(false); // reset on error
      },
    });
  }

  return (
    <div className="relative z-10 mx-auto mb-5 max-w-7xl rounded-lg bg-linear-to-r from-btn-primary/15 to-info/15 px-5 pt-13 pb-5 lg:mb-10 lg:gap-x-10 lg:px-20 lg:py-40 lg:pt-26 lg:pb-10">
      <div className="flex items-center justify-center pb-10">
        <AppLogo />
      </div>
      <SectionHeader>
        <h2 className="mb-2 text-center text-3xl text-[40px] text-secondary">
          Ihre Kostenschätzung
        </h2>
        <p className="px-0 text-center font-open-sans text-base text-secondary/70 lg:px-50 lg:text-lg">
          {" "}
          {`description: "Basierend auf einer verfügbaren Installationsfläche von ca. 44 m² besteht die Systemkonfiguration aus 21 Photovoltaikmodulen mit einer erwarteten Leistung von rund 9,0 kWp und umfasst folgende Komponenten:"`}
        </p>
      </SectionHeader>

      <div className="relative z-10 mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        {!is_valid_order && (
          <div className="absolute inset-0 top-0 left-0 z-20 h-full w-full bg-linear-to-r from-info/5 to-btn-primary/5 backdrop-blur-3xl">
          </div>
        )}
        {items.map((item, index) => (
          <BoxCard key={index} item={item} className={"pb-6!"}>
            <p className="pt-3 text-secondary/70">
              <span className="text-sm font-normal text-secondary lg:text-base">
                {item?.short_info?.title}
                {" "}
              </span>{" "}
              {item?.short_info?.description}
            </p>
          </BoxCard>
        ))}
      </div>
      <div className="relative z-10 mt-10">
        <h2 className="py-4 font-montserrat text-3xl text-[40px] font-semibold text-secondary lg:py-8">
          Dienstleistungen
        </h2>
        <div className="relative z-10">
          {!is_valid_order && (
            <div className="absolute inset-0 top-0 left-0 z-20 h-full w-full bg-linear-to-r from-info/5 to-btn-primary/5 backdrop-blur-3xl">
            </div>
          )}

          <div className="">
            <h2 className="flex items-center gap-2 font-montserrat text-base font-semibold text-secondary lg:text-lg">
              <span className="h-7.5 w-7.5">
                <Icon
                  iconNode={CircleCheckBig}
                  iconClassName="text-secondary"
                />
              </span>
              Professionelle Installation & Netzeinbindung
              <span className="flex items-center gap-2 rounded-full bg-info p-1 px-2 text-sm text-primary lg:text-base">
                <Icon
                  iconNode={CircleCheckBig}
                  iconClassName="w-4 h-4 text-primary"
                  className="p-1"
                />{" "}
                Inklusive
              </span>
            </h2>
            <p className="flex gap-2 pt-2 pr-0 pl-9 font-open-sans text-xs font-normal text-secondary/70 lg:pr-120 lg:text-base">
              Unsere Expertentechniker übernehmen die komplette Montage und Elektroinstallation, sorgen für nahtlose
              Netzanbindung und verwenden ausschließlich hochwertige Materialien.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="flex items-center  gap-2 font-montserrat text-base font-semibold text-secondary lg:text-lg">
              <span className="h-7.5 w-7.5">
                <Icon
                  iconNode={CircleCheckBig}
                  iconClassName="text-secondary"
                />
              </span>
              Professionelle Installation & Netzeinbindung
              <span className="flex items-center gap-2 rounded-full bg-info p-1 px-2 text-sm text-primary lg:text-base">
                <Icon
                  iconNode={CircleCheckBig}
                  iconClassName="w-4 h-4 text-primary"
                  className="p-1"
                />{" "}
                Inklusive
              </span>
            </h2>
            <p className="flex gap-2 pt-2 pr-0 pl-9 font-open-sans text-xs font-normal text-secondary/70 lg:pr-120 lg:text-base">
              Unsere Expertentechniker übernehmen die komplette Montage und Elektroinstallation, sorgen für nahtlose
              Netzanbindung und verwenden ausschließlich hochwertige Materialien.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="flex items-center gap-2 font-montserrat text-base font-semibold text-secondary lg:text-lg">
              <span className="h-7.5 w-7.5">
                <Icon
                  iconNode={CircleCheckBig}
                  iconClassName="text-secondary"
                />
              </span>
              Professionelle Installation & Netzeinbindung
              <span className="flex items-center gap-2 rounded-full bg-info p-1 px-2 text-sm text-primary lg:text-base">
                <Icon
                  iconNode={CircleCheckBig}
                  iconClassName="w-4 h-4 text-primary"
                  className="p-1"
                />{" "}
                Inklusive
              </span>
            </h2>
            <p className="flex gap-2 pt-2 pr-0 pl-9 font-open-sans font-normal text-secondary/70 lg:pr-120">
              Unsere Expertentechniker übernehmen die komplette Montage und Elektroinstallation, sorgen für nahtlose
              Netzanbindung und verwenden ausschließlich hochwertige Materialien.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="flex items-center gap-2 font-montserrat text-base font-semibold text-secondary lg:text-lg">
              <span className="h-7.5 w-7.5">
                <Icon
                  iconNode={CircleCheckBig}
                  iconClassName="text-secondary"
                />
              </span>
              Professionelle Installation & Netzeinbindung
              <span className="flex items-center gap-2 rounded-full bg-info p-1 px-2 text-sm text-primary lg:text-base">
                <Icon
                  iconNode={CircleCheckBig}
                  iconClassName="w-4 h-4 text-primary"
                  className="p-1"
                />{" "}
                Inklusive
              </span>
            </h2>
            <p className="flex gap-2 pt-2 pr-0 pl-9 font-open-sans font-normal text-secondary/70 lg:pr-120">
              Unsere Expertentechniker übernehmen die komplette Montage und Elektroinstallation, sorgen für nahtlose
              Netzanbindung und verwenden ausschließlich hochwertige Materialien.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="py-4 font-montserrat text-2xl text-[40px] font-semibold text-secondary lg:py-8">
          Ihre Investition
        </h2>

        <div className="relative z-10">
          {!is_valid_order && (
            <div className="absolute inset-0 top-0 left-0 z-20 h-full w-full bg-linear-to-r from-info/5 to-btn-primary/5 backdrop-blur-3xl">
            </div>
          )}
          <p className="mb-3 flex justify-between px-0 font-open-sans text-base lg:px-15 lg:text-lg">
            <span className="font-normal text-secondary/70">
              Ihre Investition
            </span>{" "}
            <span className="font-semibold text-secondary">
              {investment()} €
            </span>
          </p>
          <p className="mb-3 flex justify-between px-0 pr-0 font-open-sans text-base lg:px-15 lg:text-lg">
            <span className="font-normal text-secondary/70">
              {SystemSetting?.vat}% MwSt.
            </span>{" "}
            <span className="font-semibold text-secondary">
              {calculateVat()} €
            </span>
          </p>

          <p className="mb-3 flex justify-between px-0 pr-0 font-open-sans text-base lg:px-15 lg:text-lg">
            <span className="font-normal text-secondary/70">
              WallBox
            </span>{" "}
            <span className="font-semibold text-secondary">
              {wallBoxPrice()} €
            </span>
          </p>
          <p className="mb-3 flex justify-between px-0 pr-0 font-open-sans text-base lg:px-15 lg:text-lg">
            <span className="font-normal text-secondary/70">
              EVU Fees
            </span>{" "}
            <span className="font-semibold text-secondary">
              {evuFees()} €
            </span>
          </p>

          <p className="mb-3 flex justify-between px-0 pr-0 font-open-sans text-base lg:px-15 lg:text-lg">
            <span className="font-normal text-secondary/70">
              Delivery Fees
            </span>{" "}
            <span className="font-semibold text-secondary">
              {deliveryFees()} €
            </span>
          </p>

          <p className="mb-3 flex justify-between px-0 pr-0 font-open-sans text-base lg:px-15 lg:text-lg">
            <span className="font-normal text-secondary/70">
              Service Charge
            </span>{" "}
            <span className="font-semibold text-secondary">
              {serviceCharge()} €
            </span>
          </p>

          {SystemSetting?.discount > 0 && (
            <p className="mb-3 flex justify-between px-0 pr-0 font-open-sans text-base lg:px-15 lg:text-lg">
              <span className="font-normal text-secondary/70">
                {SystemSetting?.discount}% Sonderrabatt.
              </span>{" "}
              <span className="font-semibold text-secondary">
                {calculateDiscount()} €
              </span>
            </p>
          )}

          <p className="mb-3 flex justify-between border-b border-secondary/10 px-0 pr-0 font-open-sans text-base lg:px-15 lg:text-lg">
            <span className="font-semibold text-secondary">
              Summe
            </span>{" "}
            <span className="font-semibold text-secondary lg:text-[40px]">
              {calculateTotal().toFixed(4)} €
            </span>
          </p>

          <p className="mb-3 flex justify-between px-0 font-open-sans text-base lg:px-15 lg:text-lg">
            <span className="text-xs font-normal text-secondary/70 lg:text-base">
              Spezifische Kosten pro kWp (gemäß den jährlichen Steuerbestimmungen 2022){" "}
            </span>{" "}
            <span className="text-sm font-semibold text-secondary lg:text-base">
              {calculateTotal().toFixed(4)} €
            </span>
          </p>
        </div>
      </div>

      <div className="relative z-10">
        {!is_valid_order && (
          <div className="absolute inset-0 top-0 left-0 z-20 h-full w-full bg-linear-to-r from-info/5 to-btn-primary/5 backdrop-blur-3xl">
          </div>
        )}
        <div className="mt-10 rounded-md bg-primary p-10">
          <p className="pb-4 font-montserrat text-lg font-normal text-secondary/70 lg:text-2xl">
            <span className="font-semibold text-secondary">
              WICHTIG:
            </span>{" "}
            Diese Zahlen sind nur Richtwerte. Individuelle Einsparungen und Projekt-Rabatte werden noch angewendet.
          </p>

          <p className="pb-4 font-montserrat text-lg font-normal text-secondary lg:text-2xl">
            Um den besten Wert zu gewährleisten, erstellen wir endgültige Angebote erst nach einem persönlichen Gespräch
            über Ihre individuellen Bedürfnisse. Sie können jetzt einen{" "}
            <span className="text-btn-primary">Termin buchen</span>{" "}
            oder unser Team wird sich innerhalb der nächsten 24 Stunden bei Ihnen melden.
          </p>
        </div>

        <div className="mt-8">
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
              {processing ? "Genereating PDF" : "  Kostenvoranschlag herunterladen"}
            </Button>

            <Link href="/booking">
              <Button className="group border border-btn-primary bg-transparent text-secondary transition-all duration-300 ease-in-out hover:bg-btn-primary hover:text-white">
                <Icon
                  iconNode={Download}
                  variant="circle"
                  className="border border-btn-primary bg-transparent text-secondary/70 transition-all duration-300 ease-in-out group-hover:border-white group-hover:text-white"
                  iconClassName="text-btn-primary group-hover:text-white transition-colors duration-300 ease-in-out"
                />
                Wirtschaftsanalyse herunterladen
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center pt-21">
            <Link href={route("configurator")} className="inline-flex items-center gap-3 text-secondary/70">
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

export { CartDetails };
