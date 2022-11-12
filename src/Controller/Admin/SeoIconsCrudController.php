<?php

namespace App\Controller\Admin;

use App\Entity\SeoIcons;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class SeoIconsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return SeoIcons::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name')->setlabel('Nom'),
            ImageField::new('link')
                ->setBasePath('picsSeo')
                ->setUploadDir('public/picsSeo/')
                ->setUploadedFileNamePattern('[randomhash].[extension]')
                ->setRequired(false)
                ->setlabel('Image'),
        ];
    }
}
