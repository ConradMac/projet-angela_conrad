<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Form\ContactsType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactsController extends AbstractController
{
    #[Route('/contact', name: 'app_contacts')]
    public function index(Request $request, EntityManagerInterface $em): Response
    {
        $contact = new Contacts();
        $form = $this->createForm(ContactsType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contact = $form->getData();
            $contact->setName($contact->getName());
            $contact->setLastName($contact->getLastname());
            $contact->setEmail($contact->getEmail());
            $contact->setSubject($contact->getSubject());
            $contact->setMessage($contact->getMessage());
            $contact->setPhone($contact->getPhone());
            $em->persist($contact);
            $em->flush();
            // use function to get hashed password!
            $this->addFlash('success', 'Votre message a bien été envoyé !');
            // dd($form);

            return $this->redirectToRoute('app_home');
        }
        return $this->render('contacts/index.html.twig', [
            'form' => $form->createView(),
        ]);
            
    }
}
