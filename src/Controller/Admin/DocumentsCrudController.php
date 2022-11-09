<?php

namespace App\Controller\Admin;

use App\Entity\Documents;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;

class DocumentsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Documents::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            AssociationField::new('users')->setlabel('users'),
            DateField::new('sending_date')->setlabel('sending_date'),
            TextField::new('description')->setlabel('description'),
            ImageField::new('seo')->setBasePath($this->getParameter('documents_directory'))->setlabel('seo'),
            ImageField::new('ui_ux')->setBasePath($this->getParameter('documents_directory'))->setUploadDir('public/documents')->setlabel('ui_ux'),
            ImageField::new('image_service')->setBasePath('documents')->setUploadDir('public/documents')->setlabel('image service'),
            // fielfield easy admin.
        ];
    }
    
}
