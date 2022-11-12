<?php

namespace App\Controller\Admin;

use App\Entity\Picskills;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class PicskillsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Picskills::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name')->setlabel('Nom'),
            ImageField::new('link')->setBasePath('picskills')->setUploadDir('public/picskills/')->setUploadedFileNamePattern('[randomhash].[extension]')->setRequired(false)->setlabel('Image'),
        ];
    }
    
}
