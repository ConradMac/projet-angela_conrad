<?php

namespace App\Controller\Admin;

use App\Entity\Services;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;

class ServicesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Services::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            
            TextField::new('name')->setlabel('Nom'),

            SlugField::new('slug')->setTargetFieldName('name')->setlabel('Slug'),
            MoneyField::new('price')->setCurrency('EUR')->setlabel('Prix'),
            AssociationField::new('categories')->setlabel('Catégories'),  
            
            
            


            
            
        ];
    }
    
}
