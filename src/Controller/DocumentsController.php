<?php

namespace App\Controller;

use App\Entity\Documents;
use App\Form\DocumentsType;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class DocumentsController extends AbstractController
{
    #[Route('/documents', name: 'app_mon_compte')]
    public function new(Request $request, SluggerInterface $slugger, EntityManagerInterface $entityManager)
    {

        $file = new Documents();
        $form = $this->createForm(DocumentsType::class, $file);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $newFiles['seo'] =  $form->get('seo')->getData();
            $newFiles['ui_ux'] =  $form->get('ui_ux')->getData();
            $newFiles['image_service'] =  $form->get('image_service')->getData();





            // this condition is needed because the 'brochure' field is not required
            // so the PDF file must be processed only when a file is uploaded
            if ($newFiles) {
                // dd($newFiles);
                foreach ($newFiles as $column => $newFile) {
                    if ($newFile) {
                        $originalFilename = $newFile->getClientOriginalName();
                        // this is needed to safely include the file name as part of the URL
                        $safeFilename = $slugger->slug($originalFilename);
                        $newFilename = $safeFilename . '-' . uniqid() . '.' . $newFile->guessExtension();
                        $newFile->move(
                            $this->getParameter('documents_directory'),
                            $newFilename
                        );
                        if ($column == 'seo') {
                            $file->setSeo($newFilename);
                        }
                        if ($column == 'ui_ux') {
                            $file->setUiUx($newFilename);
                        }
                        if ($column == 'image_service') {
                            $file->setImageService($newFilename);
                        }
                    }
                }
            }

            $file->setSendingDate(new DateTime());
            $file->setUsers($this->getUser());
            $entityManager->persist($file);
            $entityManager->flush();



            // ... persist the $product variable or any other work

            $entityManager->persist($file);
            // $entityManager->persist($newDocuments);
            $entityManager->flush();

            return $this->redirectToRoute('app_mon_compte');
        } // fermeture soumission formulaire
        $titre_seo = 'bonjour';
        return $this->renderForm('documents/index.html.twig', [
            'form' => $form,
            'titre_seo' => $titre_seo,
        ]);
    } //fermeture pubf new





}// fermeture controller
