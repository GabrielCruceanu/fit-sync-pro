"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Facebook, Globe, Instagram, Mail, Phone, Twitter } from "lucide-react";

type Props = {
  phone: string | null;
  email: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  twitter: string | null;
};
export const ProfileContactModal = ({
  phone,
  email,
  website,
  instagram,
  facebook,
  twitter,
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        className="inline-flex items-center py-3 px-5 font-semibold text-center rounded-lg text-background bg-foreground w-full lg:max-w-[300px]"
      >
        Contact
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Contact</ModalHeader>
              <ModalBody>
                {phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <a className="font-semibold" href={"tel:" + phone}>
                      {phone}
                    </a>
                  </div>
                )}
                {email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <a className="font-semibold" href={"mailto:" + email}>
                      {email}
                    </a>
                  </div>
                )}
                {website && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-3" />
                    <a
                      className="font-semibold"
                      href={website}
                      target={"_blank"}
                    >
                      {website}
                    </a>
                  </div>
                )}
                {instagram && (
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 mr-3" />
                    <a
                      className="font-semibold"
                      href={instagram}
                      target={"_blank"}
                    >
                      {instagram}
                    </a>
                  </div>
                )}
                {facebook && (
                  <div className="flex items-center">
                    <Facebook className="h-5 w-5 mr-3" />
                    <a
                      className="font-semibold"
                      href={facebook}
                      target={"_blank"}
                    >
                      {facebook}
                    </a>
                  </div>
                )}
                {twitter && (
                  <div className="flex items-center">
                    <Twitter className="h-5 w-5 mr-3" />
                    <a
                      className="font-semibold"
                      href={twitter}
                      target={"_blank"}
                    >
                      {twitter}
                    </a>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                {/*<Button color="default" variant="light" onPress={onClose}>*/}
                {/*  Close*/}
                {/*</Button>*/}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
